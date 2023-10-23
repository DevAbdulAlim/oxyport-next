import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = params.id;
  try {
    if (!productId) {
      return NextResponse.json(
        { message: "Product ID is missing" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(productId),
      },
    });

    if (product) {
      return NextResponse.json(product, { status: 404 });
    } else {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}