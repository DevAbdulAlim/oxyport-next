import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendJsonResponse } from "../../utils/sendJsonResponse";
import { hashPassword } from "../../utils/hashPassword";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return sendJsonResponse(400, false, { message: "User already existed" });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role: "user",
        status: "inactive",
      },
    });

    return sendJsonResponse(201, true, { message: "Registration successful" });
  } catch (error) {}
}
