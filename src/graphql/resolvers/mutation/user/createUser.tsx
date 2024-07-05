import { UserModel } from "@/models/user-model";
import { CreateUserInput } from "@/generated/client";
export const createUser = async (
  _: CreateUserInput,
  { input }: { input: CreateUserInput },
  context: CreateUserInput
) => {
  const { name, email, password } = input;
  console.log("input", input);
  try {
    const user = await UserModel.create({
      name: name,
      email: email,
      password: password,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};