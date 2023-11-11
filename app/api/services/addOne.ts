import { PrismaClient } from "@prisma/client";
import { sendJsonResponse } from "../utils/sendJsonResponse";

const prisma = new PrismaClient();

// Define valid model names
export type ValidModelNames = "category" | "product" | "order" | "user";

// Map model names to their corresponding Prisma methods
const modelMethods: Record<ValidModelNames, (args: any) => Promise<any>> = {
  category: (args) => prisma.category.create(args),
  product: (args) => prisma.product.create(args),
  order: (args) => prisma.order.create(args),
  user: (args) => prisma.user.create(args),
};

export async function addOne(item: ValidModelNames, data: Record<string, any>) {
  try {
    // Retrieve the appropriate method based on 'item'
    const createData = modelMethods[item];

    const newData = await createData({
      data,
    });

    // Check if the item is not found
    if (!newData) {
      return sendJsonResponse(404, false, { message: `Adding ${item} failed` });
    }

    // Send a successful response with the found item
    return sendJsonResponse(200, true, newData);
  } catch (error) {
    // Log and handle any errors that occur
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    // Ensure proper disconnection from the Prisma client
    await prisma.$disconnect();
  }
}
