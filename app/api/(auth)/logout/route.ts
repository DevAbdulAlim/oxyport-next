import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { sendJsonResponse } from "../../utils/sendJsonResponse";

export async function POST(req: NextRequest) {
  cookies().set("token", "");
  return sendJsonResponse(201, true, { message: "Logout Successfully" });
}
