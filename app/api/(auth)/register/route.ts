import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sendJsonResponse } from "../../utils/sendJsonResponse";
import { hashPassword } from "../../utils/hashPassword";
import { generateVerifyToken } from "../../utils/verifyToken";
import { transporter } from "../../utils/transporter";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return sendJsonResponse(409, false, { message: "User already existed" });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    const verifyToken = await generateVerifyToken(email);

    // send the activation email
    const activationLink = `${process.env.NEXT_HOST}/email-verification?token=${verifyToken}`;
    const mailOptions = {
      from: "aa.abdulalim13@gmail.com",
      to: email,
      subject: "Activate Your Account",
      text: `Click the following link to activate your account: ${activationLink}`,
    };
    await transporter.sendMail(mailOptions);

    return sendJsonResponse(201, true, { message: "Registration successful" });
  } catch (error) {}
}
