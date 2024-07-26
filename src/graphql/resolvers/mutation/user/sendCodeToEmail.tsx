import { EmailForSendingVerificationOtpInput } from "@/generated/client";
import { UserModel } from "@/models/user-model";
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
  _: any,
  { input }: { input: EmailForSendingVerificationOtpInput }
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
    const user = await UserModel.findOneAndUpdate(
      { email: email },
      {
        verificationCode: randomNumber,
      }
    );
    if (user) {
      await transport.sendMail(options);
    }

    return "sent code to email";
  } catch (err) {
    console.error("Error sending email:", err);
  }
};
