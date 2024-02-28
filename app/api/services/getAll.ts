import prisma from "@/lib/prisma";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { ModelNames } from "@/app/api/utils/types";

export async function getAll(
  item: ModelNames,
  currentPage: number,
  itemsPerPage: number
) {
  const modelMethods: Record<ModelNames, () => Promise<any>> = {
    category: () =>
      prisma.category.findMany({
        skip: Math.max((currentPage - 1) * itemsPerPage, 0),
        take: itemsPerPage,
      }),
    product: () =>
      prisma.product.findMany({
        skip: Math.max((currentPage - 1) * itemsPerPage, 0),
        take: itemsPerPage,
      }),
    order: () =>
      prisma.order.findMany({
        skip: Math.max((currentPage - 1) * itemsPerPage, 0),
        take: itemsPerPage,
      }),
    user: () =>
      prisma.user.findMany({
        skip: Math.max((currentPage - 1) * itemsPerPage, 0),
        take: itemsPerPage,
      }),
  };

  try {
    const findMany = modelMethods[item];

    if (!findMany) {
      return sendJsonResponse(404, false, {
        message: `${item} table not found`,
      });
    }

    const totalRecords = await (prisma[item] as any).count();
    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    const foundItems = await findMany();

    if (foundItems.length === 0) {
      return sendJsonResponse(200, true, { message: `${item} not found` });
    }

    return sendJsonResponse(200, true, foundItems, totalRecords, totalPages);
  } catch (error) {
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
