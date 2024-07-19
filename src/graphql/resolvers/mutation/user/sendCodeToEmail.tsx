import { EmailForSendingVerificationOtpInput } from "@/generated/client";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "damdinnymg@gmail.com",
    pass: "yfimvgvjmqnmfghb",
  },
});

export const sendCodeToEmail = async (
  _: any, // Assuming you don't need to use this parameter
  { input }: { input: EmailForSendingVerificationOtpInput },
  context: any // Assuming you don't need to use this parameter
) => {
  const { email } = input;
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  console.log("Generated Code:", randomNumber);

  const options = {
    from: "damdinnymg@gmail.com",
    to: email,
    subject: "Password Reset",
    text: `Your code is ${randomNumber}`,
  };

  try {
    await transport.sendMail(options);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
