import prisma from "@/lib/prisma";
import { generateResetToken } from "@/app/api/utils/resetToken";
import { sendJsonResponse } from "@/app/api/utils/sendJsonResponse";
import { transporter } from "@/app/api/utils/transporter";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return sendJsonResponse(400, false, {
        message: "User not found",
      });
    }

    const resetToken = await generateResetToken(email);

    const mailOptions = {
      from: "aa.abdulalim13@gmail.com",
      to: email,
      subject: "Password Reset Request",
      text: `Click the following link to reset your password: ${process.env.NEXT_HOST}/reset-password?token=${resetToken}`,
    };
    try {
      await transporter.sendMail(mailOptions);
      return sendJsonResponse(200, true, {
        message: "Password reset email sent successfully",
      });
    } catch (error) {
      console.error(error);
      return sendJsonResponse(500, false, {
        error: "Failed to send the password reset email",
      });
    }
  } catch (error) {
    console.error(error);
    return sendJsonResponse(500, false, {
      error: "An error occurred while processing your request",
    });
  }
}
