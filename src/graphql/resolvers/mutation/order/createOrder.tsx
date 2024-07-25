import { OrderModel } from "@/models/order-model";
import { CreateOrderInput } from "@/generated/client";
export const createOrder = async (
  _: any,
  { input }: { input: CreateOrderInput },
  context: any
) => {
  const { userId, couponCode, createdAt } = input;
  try {
    await OrderModel.create({
      userId: userId,
      state: "pending",
      couponCode: couponCode,
    });
    return "created successful";
  } catch (err) {
    console.log(err);
  }
};
