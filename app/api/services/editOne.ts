import { PrismaClient } from "@prisma/client";
import { sendResponse } from "../utils/sendResponse";

const prisma = new PrismaClient();

// Define valid model names
export type ValidModelNames = "category" | "product" | "user";

// Map model names to their corresponding Prisma methods
const modelMethods: Record<ValidModelNames, (args: any) => Promise<any>> = {
  category: (args) => prisma.category.update(args),
  product: (args) => prisma.product.update(args),
  user: (args) => prisma.user.update(args),
};

export async function editOne(
  item: ValidModelNames,
  id: string,
  data: Record<string, any>
) {
  try {
    // Check if the 'id' is missing
    if (!id) {
      return sendResponse(400, false, { message: `${item} ID is missing` });
    }

    // Retrieve the appropriate 'findUnique' method based on 'item'
    const updateItem = modelMethods[item];

    // Check if the 'item' is not found in 'modelMethods'
    if (!updateItem) {
      return sendResponse(404, false, { message: `${item} table not found` });
    }

    // Find and return the unique item using the selected 'findUnique' method
    const updatedItem = await updateItem({
      where: {
        id: parseInt(id),
      },
      data,
    });

    // Check if the item is not found
    if (!updatedItem) {
      return sendResponse(404, false, { message: `${item} update failed` });
    }

    // Send a successful response with the found item
    return sendResponse(200, true, updatedItem);
  } catch (error) {
    // Log and handle any errors that occur
    console.log(error);
    return sendResponse(500, false, { message: "Internal Server Error" });
  } finally {
    // Ensure proper disconnection from the Prisma client
    await prisma.$disconnect();
  }
}
