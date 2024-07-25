import { UserModel } from "@/models/user-model";
import { UserTokenInput } from "@/generated/client";
import jwt from "jsonwebtoken";

export const getUserInfo = async (
  _: UserTokenInput,
  { input }: { input: UserTokenInput },
  context: UserTokenInput
) => {
  const { token } = input;
  const decoded = jwt.verify(token, "SomeSecretKey") as { id: string };
  const email = decoded.id;
  try {
    const user = await UserModel.findOne({ email: email });
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
  }
};
