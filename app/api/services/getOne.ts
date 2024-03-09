import prisma from "@/lib/prisma";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { ModelNames } from "@/app/api/utils/types";

const modelMethods: Record<ModelNames, (args: any) => Promise<any>> = {
  category: (args) => prisma.category.findUnique(args),
  product: (args) => prisma.product.findUnique(args),
  order: (args) => prisma.order.findUnique(args),
  user: (args) => prisma.user.findUnique(args),
};

export async function getOne(item: ModelNames, id: string) {
  try {
    if (!id) {
      return sendJsonResponse(400, false, { message: `${item} ID is missing` });
    }

    const findUnique = modelMethods[item];

    if (!findUnique) {
      return sendJsonResponse(404, false, {
        message: `${item} table not found`,
      });
    }

    const foundItem = await findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!foundItem) {
      return sendJsonResponse(404, false, { message: `${item} not found` });
    }

    return sendJsonResponse(200, true, foundItem);
  } catch (error) {
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
