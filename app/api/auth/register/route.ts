import { generateEmailVerifyToken } from "@/app/api/utils/emailVerifyToken";
import { hashPassword } from "@/app/api/utils/hashPassword";
import prisma from "@/lib/prisma";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { transporter } from "@/app/api/utils/transporter";
import { NextRequest } from "next/server";

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

    const verifyToken = await generateEmailVerifyToken(email);

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
