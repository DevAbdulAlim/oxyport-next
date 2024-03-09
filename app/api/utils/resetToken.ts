import crypto from "crypto";
import { sendJsonResponse } from "./sendJsonResponse";
import prisma from "../../../lib/prisma";

const MAX_TOKEN_AGE = 24 * 60;

export async function generateResetToken(email: string) {
  const resetToken = crypto.randomBytes(32).toString("hex");

  const updatedUser = await prisma.user.update({
    where: { email },
    data: {
      resetToken,
      resetTokenExpires: new Date(new Date().getTime() + MAX_TOKEN_AGE * 60000),
    },
  });

  if (!updatedUser) {
    return sendJsonResponse(404, false, { error: "User not found" });
  }

  return resetToken;
}

export async function validateResetToken(token: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpires: {
          gte: new Date(new Date().getTime() - MAX_TOKEN_AGE * 60000),
        },
      },
    });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
