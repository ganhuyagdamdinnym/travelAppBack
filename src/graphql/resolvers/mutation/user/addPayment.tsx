import { UserModel } from "@/models/user-model";
import { BankNameInput } from "@/generated/client";

export const addPayment = async (
  _: any,
  { input }: { input: BankNameInput }
) => {
  const { bankName, email } = input;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      throw new Error("User not found");
    }
    console.log("user", user);
    const methods = user.payment || [];
    methods.push(bankName);
    user.payment = methods;
    await user.save();
    console.log("new", methods);
    return "Payment method added successfully";
  } catch (error) {
    throw error;
  }
};
