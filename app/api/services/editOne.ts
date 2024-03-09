import prisma from "@/lib/prisma";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { ModelNames } from "@/app/api/utils/types";

const modelMethods: Record<ModelNames, (args: any) => Promise<any>> = {
  category: (args) => prisma.category.update(args),
  product: (args) => prisma.product.update(args),
  order: (args) => prisma.order.update(args),
  user: (args) => prisma.user.update(args),
};

export async function editOne(
  item: ModelNames,
  id: string,
  data: Record<string, any>
) {
  try {
    if (!id) {
      return sendJsonResponse(400, false, { message: `${item} ID is missing` });
    }

    const updateItem = modelMethods[item];

    if (!updateItem) {
      return sendJsonResponse(404, false, {
        message: `${item} table not found`,
      });
    }

    const updatedItem = await updateItem({
      where: {
        id: parseInt(id),
      },
      data,
    });

    if (!updatedItem) {
      return sendJsonResponse(404, false, { message: `${item} update failed` });
    }

    return sendJsonResponse(200, true, updatedItem);
  } catch (error) {
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
