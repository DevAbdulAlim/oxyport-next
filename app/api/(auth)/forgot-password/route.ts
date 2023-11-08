import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sendJsonResponse } from "../../utils/sendJsonResponse";
import { generateResetToken } from "../../utils/resetToken";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    console.log(email);

    // Generate reset token
    const resetToken = await generateResetToken(email);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "aa.abdulalim13@gmail.com",
        pass: process.env.NEXT_MAIL_SECRET,
      },
      tls: {
        rejectUnauthorized: false, // Set this to false to bypass SSL verification
      },
    });

    const mailOptions = {
      from: "aa.abdulalim13@gmail.com",
      to: email,
      subject: "Password Reset Request",
      text: `Click the following link to reset your password: http://${process.env.NEXT_HOST}/reset-password?token=${resetToken}`,
    };
    try {
      // Send the password reset email
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
