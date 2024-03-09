import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "aa.abdulalim13@gmail.com",
    pass: process.env.MAIL_SECRET,
  },
  tls: {
    rejectUnauthorized: false, // Set this to false to bypass SSL verification
  },
});
