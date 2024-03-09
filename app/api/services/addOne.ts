import prisma from "@/lib/prisma";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { ModelNames } from "@/app/api/utils/types";

const modelMethods: Record<ModelNames, (args: any) => Promise<any>> = {
  category: (args) => prisma.category.create(args),
  product: (args) => prisma.product.create(args),
  order: (args) => prisma.order.create(args),
  user: (args) => prisma.user.create(args),
};

export async function addOne(item: ModelNames, data: Record<string, any>) {
  try {
    const createData = modelMethods[item];

    const newData = await createData({
      data,
    });

    if (!newData) {
      return sendJsonResponse(404, false, { message: `Adding ${item} failed` });
    }

    return sendJsonResponse(200, true, newData);
  } catch (error) {
    console.log(error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
