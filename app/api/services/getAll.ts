import { PrismaClient } from "@prisma/client";
import { sendResponse } from "../utils/sendResponse";

const prisma = new PrismaClient();

// Define valid model names
export type ValidModelNames = "category" | "product" | "user";

// Map model names to their corresponding Prisma methods
const modelMethods: Record<ValidModelNames, () => Promise<any>> = {
  category: () => prisma.category.findMany(),
  product: () => prisma.product.findMany(),
  user: () => prisma.user.findMany(),
};

export async function getAll(item: ValidModelNames) {
  try {
    // Retrieve the appropriate 'findManay' method based on 'item'
    const findMany = modelMethods[item];

    // Check if the 'item' is not found in 'modelMethods'
    if (!findMany) {
      return sendResponse(404, false, { message: `${item} table not found` });
    }

    // Find and return the unique item using the selected 'findManay' method
    const foundItems = await findMany();

    // Check if the item is not found
    if (!foundItems) {
      return sendResponse(404, false, { message: `${item} not found` });
    }

    // Send a successful response with the found item
    return sendResponse(200, true, foundItems);
  } catch (error) {
    // Log and handle any errors that occur
    console.log(error);
    return sendResponse(500, false, { message: "Internal Server Error" });
  } finally {
    // Ensure proper disconnection from the Prisma client
    await prisma.$disconnect();
  }
}
