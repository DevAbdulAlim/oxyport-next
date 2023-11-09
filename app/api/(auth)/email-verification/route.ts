import { NextRequest } from "next/server";
import { sendJsonResponse } from "../../utils/sendJsonResponse";
import { validateVerifyToken } from "../../utils/verifyToken";
import { editOne } from "../../services/editOne";

export async function PUT(req: NextRequest) {
  try {
    const verifyToken = await req.nextUrl.searchParams.get("token");

    if (!verifyToken) {
      return sendJsonResponse(400, false, { error: "verify token not found" });
    }

    const user = await validateVerifyToken(verifyToken);

    if (!user) {
      sendJsonResponse(400, false, { error: "token verification failed" });
    }

    const userId = user?.id?.toString();

    // update user status to active
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
