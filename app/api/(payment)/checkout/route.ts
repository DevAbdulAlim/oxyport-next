import { NextRequest } from "next/server";
import { sendJsonResponse } from "../../utils/sendJsonResponse";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { cartItems } = await req.json();
  return await checkProductsExistence(cartItems);
}

const checkProductsExistence = async (cartItems: CartItemType[]) => {
  try {
    const productIds = cartItems.map((product) => product.id);

    const existingProducts = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    const stockMap = new Map(
      existingProducts.map((product) => [product.id, product.stock])
    );

    const productsWithAvailability = cartItems.map((product) => {
      const existingProduct = existingProducts.find((p) => p.id === product.id);

      if (existingProduct) {
        const availableStock = stockMap.get(existingProduct.id) || 0;

        if (product.quantity <= availableStock) {
          return {
            id: product.id,
            quantity: product.quantity,
            status: "available",
          };
        } else {
          return {
            id: product.id,
            quantity: product.quantity,
            status: "insufficientStock",
          };
        }
      } else {
        return {
          id: product.id,
          quantity: product.quantity,
          status: "notFound",
        };
      }
    });
    return sendJsonResponse(200, true, { productsWithAvailability });
  } catch (error) {
    console.error("Error checking product existence:", error);
    return sendJsonResponse(500, false, { message: "Internal Sever Error" });
  }
};

interface CartItemType {
  id: number;
  quantity: number;
}
