import { OrderModel } from "@/models/order-model";
import { CreateOrderInput } from "@/generated/client";
export const createOrder = async (
  _: any,
  { input }: { input: CreateOrderInput }
) => {
  const { userEmail, couponCode, createdAt, ticketQuantity } = input;
  console.log("imput", input);
  try {
    await OrderModel.create({
      userEmail: userEmail,
      state: "pending",
      couponCode: couponCode,
      ticketQuantity: ticketQuantity,
    });
    return "created successful";
  } catch (err) {
    console.log(err);
  }
};
