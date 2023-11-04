import { NextResponse } from "next/server";

export async function sendJsonResponse(
  status: number = 500,
  success: boolean = false,
  data: Record<string, any> = {},
  records: number = 0,
  totalPages: number = 1
) {
  return NextResponse.json({ success, data, records, totalPages }, { status });
}
