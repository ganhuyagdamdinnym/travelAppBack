import { UserModel } from "@/models/user-model";
import { VerificationCodeInput } from "@/generated/client";
export const verificationCode = async (
  _: VerificationCodeInput,
  { input }: { input: VerificationCodeInput },
  context: VerificationCodeInput
) => {
  const { email, code } = input;
  try {
    console.log("info", email, code);
    const user = await UserModel.findOne({ email: email });
    console.log("useeeee", user);
    if (user) {
      if (user.verificationCode == code) {
        return "successful";
      } else {
        return "unsuccessful";
      }
    }
  } catch (err) {
    console.log(err);
  }
};
