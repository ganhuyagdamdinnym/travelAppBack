import { UserModel } from "@/models/user-model";
import { ChangePasswordInput } from "@/generated/client";
import jwt from "jsonwebtoken";

export const changePassword = async (
  _: ChangePasswordInput,
  { input }: { input: ChangePasswordInput },
  context: ChangePasswordInput
) => {
  const { email, newPassword } = input;
  try {
    const user = await UserModel.findOneAndUpdate(
      { email: email },
      {
        password: newPassword,
      }
    );
    const token = jwt.sign({ id: email }, "SomeSecretKey", {
      expiresIn: "2d",
    });
    return token;
  } catch (err) {
    console.log(err);
  }
};
