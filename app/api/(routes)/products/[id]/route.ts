import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prismaClient";

export async function GET(request: NextRequest) {
  const queryParam = request.nextUrl.searchParams.get("id");
  //   try {
  //     const product = await prisma.
  //   }
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
