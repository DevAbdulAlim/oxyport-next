import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categories = searchParams
    .getAll("categories")
    .flatMap((category) => category.split(",").map(Number))
    .filter(Boolean);
  const ratings = searchParams
    .getAll("ratings")
    .flatMap((rating) => rating.split(","))
    .map(Number)
    .filter(Boolean);
  const minPriceParam = searchParams.get("minPrice");
  const maxPriceParam = searchParams.get("maxPrice");
  const minPrice = minPriceParam ? parseFloat(minPriceParam) : undefined;
  const maxPrice = maxPriceParam ? parseFloat(maxPriceParam) : undefined;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  const where = {
    price: {
      gte: minPrice,
      lte: maxPrice,
    },
    reviews:
      ratings.length > 0
        ? { every: { OR: ratings.map((rating) => ({ rating })) } }
        : undefined,
    categoryId: categories.length > 0 ? { in: categories } : undefined,
  };

  try {
    const [products, totalItems] = await prisma.$transaction([
      prisma.product.findMany({
        where: where,
        take: pageSize,
        skip: (page - 1) * pageSize,
      }),
      prisma.product.count({
        where: where,
      }),
    ]);

    const totalPages = Math.ceil((totalItems as number) / pageSize);

    return NextResponse.json(
      { products, totalPages, pageSize },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
