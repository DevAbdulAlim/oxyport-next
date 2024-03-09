import prisma from "@/lib/prisma";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { ModelNames } from "@/app/api/utils/types";

const modelMethods: Record<ModelNames, (args: any) => Promise<any>> = {
  category: (args) => prisma.category.delete(args),
  product: (args) => prisma.product.delete(args),
  order: (args) => prisma.order.delete(args),
  user: (args) => prisma.user.delete(args),
};

export async function removeOne(item: ModelNames, id: string) {
  try {
    if (!id) {
      return sendJsonResponse(400, false, { message: `${item} ID is missing` });
    }

    const deleteItem = modelMethods[item];

    if (!deleteItem) {
      return sendJsonResponse(404, false, {
        message: `${item} table not found`,
      });
    }

    const deletedItem = await deleteItem({
      where: {
        id: parseInt(id),
      },
    });

    if (!deletedItem) {
      return sendJsonResponse(404, false, { message: `${item} not found` });
    }

    return sendJsonResponse(200, true, deletedItem);
  } catch (error) {
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
