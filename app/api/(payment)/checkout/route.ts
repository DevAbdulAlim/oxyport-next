import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";
import { sendJsonResponse } from "../../utils/sendJsonResponse";

export async function POST(req: NextRequest) {
  const { cartItems } = await req.json();
  return await checkProductsExistence(cartItems);
}

const checkProductsExistence = async (cartItems: CartItemType[]) => {
  try {
  // Extract productIds from the cartItems array
  const productIds = cartItems.map((product) => product.id);
  // Use Prisma Client to query the database for existing products
  const existingProducts = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  // Create a map to store the stock for each product
  const stockMap = new Map(
    existingProducts.map((product) => [product.id, product.stock])
  );



  // Check each requested product
  const productsWithAvailability = cartItems.map((product) => {
    const existingProduct = existingProducts.find(
      (p) => p.id === product.id
    );

    if (existingProduct) {
      const availableStock = stockMap.get(existingProduct.id) || 0;

      if (product.quantity <= availableStock) {
        // Sufficient stock
        return {
          id: product.id,
          quantity: product.quantity,
          status: "available",
        };
      } else {
        // Insufficient stock
        return {
          id: product.id,
          quantity: product.quantity,
          status: "insufficientStock",
        };
      }

    } else {
      // Product not found
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
    return sendJsonResponse(500,false, {message: "Internal Sever Error"});
  }
};

interface CartItemType {
  id: number;
  quantity: number;
}
