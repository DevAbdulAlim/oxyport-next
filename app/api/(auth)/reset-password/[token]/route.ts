// import { TokenExpiredError } from "jsonwebtoken";
// import { NextRequest, NextResponse } from "next/server";

// export async function ResetPassword(req:NextRequest) {
//     try {
//         const {password, resetToken} = req.json()

//         // validate the reset token
//         const user
//     }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import { hashPassword } from '../../util/password'; // Implement your password hashing utility
// import { validateResetToken } from '../../util/resetToken'; // Implement your token validation utility
// import { sendJsonResponse } from '../../util/sendJsonResponse'; // Implement your response-sending utility
// import { User } from '../../models/user'; // Replace with your user model

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {
//     try {
//       const { password, resetToken } = req.body;

//       // Validate the reset token
//       const user = await validateResetToken(resetToken);

//       if (!user) {
//         sendJsonResponse(400, false, { error: 'Invalid or expired token' }, res);
//         return;
//       }

//       // Hash the new password
//       const hashedPassword = await hashPassword(password);

//       // Update the user's password in the database
//       await User.updateOne({ _id: user._id }, { password: hashedPassword });

//       sendJsonResponse(200, true, { message: 'Password reset successful' }, res);
//     } catch (error) {
//       console.error(error);
//       sendJsonResponse(500, false, { error: 'An error occurred while processing your request' }, res);
//     }
//   } else {
//     sendJsonResponse(405, false, { error: 'Method not allowed' }, res);
//   }
// };
