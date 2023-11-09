import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { sendJsonResponse } from "./sendJsonResponse";

// Define the maximum token age in minutes (e.g., 24 hours)
const MAX_TOKEN_AGE = 24 * 60;

const prisma = new PrismaClient();

// Verify token generator
export async function generateVerifyToken(email: string) {
  // Generate verify token
  const verifyToken = crypto.randomBytes(32).toString("hex");

  // Update user verify token
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

export async function validateVerifyToken(token: string) {
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
