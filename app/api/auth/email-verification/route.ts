import { NextRequest } from "next/server";

import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { editOne } from "@/app/api/services/editOne";
import { validateEmailVerifyToken } from "../../utils/emailVerifyToken";

export async function PUT(req: NextRequest) {
  try {
    const verifyToken = await req.nextUrl.searchParams.get("token");

    if (!verifyToken) {
      return sendJsonResponse(400, false, { error: "verify token not found" });
    }

    const user = await validateEmailVerifyToken(verifyToken);

    if (!user) {
      sendJsonResponse(400, false, { error: "token verification failed" });
    }

    const userId = user?.id?.toString();

    return await editOne("user", userId!, {
      active: true,
      verifyToken: null,
      verifyTokenExpires: null,
    });
  } catch (error) {
    console.error("Error activating account:", error);
    return sendJsonResponse(500, false, { message: "Internal Server Error" });
  }
}
