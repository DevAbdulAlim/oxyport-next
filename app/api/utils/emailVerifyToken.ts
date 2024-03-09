import crypto from "crypto";
import { sendJsonResponse } from "./sendJsonResponse";
import prisma from "../../../lib/prisma";

const MAX_TOKEN_AGE = 24 * 60;

export async function generateEmailVerifyToken(email: string) {
  const verifyToken = crypto.randomBytes(32).toString("hex");
  const updatedUser = await prisma.user.update({
    where: { email },
    data: {
      verifyToken,
      verifyTokenExpires: new Date(
        new Date().getTime() + MAX_TOKEN_AGE * 60000
      ),
    },
  });

  if (!updatedUser) {
    return sendJsonResponse(404, false, { error: "User not found" });
  }

  return verifyToken;
}

export async function validateEmailVerifyToken(token: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        verifyToken: token,
        verifyTokenExpires: {
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
