import { PrismaClient } from "@prisma/client";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { ModelNames } from "@/app/api/utils/types";

const prisma = new PrismaClient();

export async function getAll(
  item: ModelNames,
  currentPage: number,
  itemsPerPage: number
) {
  const modelMethods: Record<ModelNames, () => Promise<any>> = {
    category: async () => {
      const [categories, totalRecords] = await Promise.all([
        prisma.category.findMany({
          skip: Math.max((currentPage - 1) * itemsPerPage, 0),
          take: itemsPerPage,
        }),
        prisma.category.count(),
      ]);
      const totalPages = Math.ceil(totalRecords / itemsPerPage);
      return { items: categories, totalRecords, totalPages };
    },
    product: async () => {
      const [products, totalRecords] = await Promise.all([
        prisma.product.findMany({
          skip: Math.max((currentPage - 1) * itemsPerPage, 0),
          take: itemsPerPage,
        }),
        prisma.product.count(),
      ]);
      const totalPages = Math.ceil(totalRecords / itemsPerPage);
      return { items: products, totalRecords, totalPages };
    },
    order: async () => {
      const [orders, totalRecords] = await Promise.all([
        prisma.order.findMany({
          skip: Math.max((currentPage - 1) * itemsPerPage, 0),
          take: itemsPerPage,
        }),
        prisma.order.count(),
      ]);
      const totalPages = Math.ceil(totalRecords / itemsPerPage);
      return { items: orders, totalRecords, totalPages };
    },
    user: async () => {
      const [users, totalRecords] = await Promise.all([
        prisma.user.findMany({
          skip: Math.max((currentPage - 1) * itemsPerPage, 0),
          take: itemsPerPage,
        }),
        prisma.user.count(),
      ]);
      const totalPages = Math.ceil(totalRecords / itemsPerPage);
      return { items: users, totalRecords, totalPages };
    },
  };

  try {
    const findMany = modelMethods[item];

    if (!findMany) {
      return sendJsonResponse(404, false, {
        message: `${item} table not found`,
      });
    }

    const { items, totalRecords, totalPages } = await findMany();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return sendJsonResponse(200, true, { message: `${item} not found` });
    }

    return sendJsonResponse(200, true, items, totalRecords, totalPages);
  } catch (error) {
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
