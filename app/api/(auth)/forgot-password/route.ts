import { NextRequest, NextResponse } from "next/server";
import { sendJsonResponse } from "../../utils/sendJsonResponse";
import { generateResetToken } from "../../utils/resetToken";
import { transporter } from "../../utils/transporter";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    console.log(email);

    // Generate reset token
    const resetToken = await generateResetToken(email);

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
