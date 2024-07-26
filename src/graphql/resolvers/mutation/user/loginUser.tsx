import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "@/models/user-model";
import { LoginInput } from "@/generated/client";

export const loginUser = async (
  _: LoginInput,
  { input }: { input: LoginInput }
) => {
  const { email, password } = input;
  try {
    const user = await UserModel.findOne({ email: email });
    console.log("usersadgywefghd", user);
    if (user.password == password) {
      const token = jwt.sign({ id: email }, "SomeSecretKey", {
        expiresIn: "2d",
      });
      console.log("token", token);
      return token;
    }
    return "hi";
  } catch (err) {
    console.log(err);
  }
};
