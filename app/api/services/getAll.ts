import { PrismaClient } from "@prisma/client";
import { sendJsonResponse } from "../utils/sendJsonResponse";

const prisma = new PrismaClient();

// Define valid model names
export type ValidModelNames = "category" | "product" | "user" | "order";

export async function getAll(
  item: ValidModelNames,
  currentPage: number,
  itemsPerPage: number
) {
  // Map model names to their corresponding Prisma methods
  const modelMethods: Record<ValidModelNames, () => Promise<any>> = {
    category: () =>
      prisma.category.findMany({
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,
      }),
    product: () =>
      prisma.product.findMany({
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,
      }),
    order: () =>
      prisma.order.findMany({
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,
      }),
    user: () =>
      prisma.user.findMany({
        skip: (currentPage - 1) * itemsPerPage,
        take: itemsPerPage,
      }),
  };

  try {
    // Retrieve the appropriate 'findManay' method based on 'item'
    const findMany = modelMethods[item];

    // Check if the 'item' is not found in 'modelMethods'
    if (!findMany) {
      return sendJsonResponse(404, false, {
        message: `${item} table not found`,
      });
    }

    const totalRecords = await (prisma[item] as any).count(); // get total records to count pages
    const totalPages = Math.ceil(totalRecords / itemsPerPage); // count total page

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    // Find and return the unique item using the selected 'findManay' method
    const foundItems = await findMany();

    // Check if the item is not found
    if (!foundItems) {
      return sendJsonResponse(404, false, { message: `${item} not found` });
    }

    // Send a successful response with the found item
    return sendJsonResponse(200, true, foundItems, totalRecords, totalPages);
  } catch (error) {
    // Log and handle any errors that occur
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    // Ensure proper disconnection from the Prisma client
    await prisma.$disconnect();
  }
}
