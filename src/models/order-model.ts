import { model, Schema } from "mongoose";
import mongoose from "mongoose";
const OrderSchema = new Schema({
  id: String,
  userId: String,
  couponCode: String,
  createdAt: String,
  state: { type: String, enum: ["pending", "done", "purchased", "canceled"] },
});
export const OrderModel =
  mongoose.models.order || mongoose.model("order", OrderSchema);
