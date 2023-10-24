import { NextResponse } from "next/server";

export async function sendJsonResponse(
  status: number = 500,
  success: boolean = false,
  data: Record<string, any> = {}
) {
  return NextResponse.json({ success, data }, { status });
}
