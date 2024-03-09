import { authenticate } from "@/app/api/utils/authenticate";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.headers.get("token");

  if (token) {
    const { success, role } = await authenticate(token);

    return NextResponse.json(
      { verified: success, role: role },
      { status: 200 }
    );
  }
  return NextResponse.json({ verified: false }, { status: 401 });
}
