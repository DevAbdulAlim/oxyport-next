import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
