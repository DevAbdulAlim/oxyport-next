import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const categories = await prisma.category.findMany({
      take: 12,
    });

    const products = await prisma.product.findMany({
      take: 12,
    });

    return NextResponse.json({ categories, products }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
