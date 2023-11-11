import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId: string = params.id;
  return await sendJsonResponse(201, true, {
    message: "Product added to cart successfully",
  });
}
