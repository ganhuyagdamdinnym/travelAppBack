import { UserModel } from "@/models/user-model";

export const getAllCustomers = async () => {
  try {
    console.log("hi");
    const Customers = await UserModel.find();
    return "hi";
  } catch (err) {
    console.log(err);
  }
};
