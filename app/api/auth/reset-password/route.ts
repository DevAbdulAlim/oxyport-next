import prisma from "@/lib/prisma";
import { hashPassword } from "@/app/api/utils/hashPassword";
import { validateResetToken } from "@/app/api/utils/resetToken";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { password } = await req.json();
    const resetToken = req.nextUrl.searchParams.get("token");

    if (!resetToken) {
      return sendJsonResponse(400, false, { error: "Token Not Found" });
    }

    const user = await validateResetToken(resetToken);

    if (!user) {
      return sendJsonResponse(400, false, {
        error: "Invalid or expired token",
      });
    }

    const hashedPassword = await hashPassword(password);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpires: null,
      },
    });

    if (!updatedUser) {
      return sendJsonResponse(400, false, { error: "Password Update failed" });
    }

    return sendJsonResponse(201, true, updatedUser);
  } catch (error) {
    console.error(error);
    return sendJsonResponse(500, false, {
      error: "An error occurred while processing your request",
    });
  }
}
