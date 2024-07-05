import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileImageUrl: String,
  phoneNumber: String,
  emergencyPhone: String,
  point: Number,
  gender: String,
  currency: String,
  favorates: [String],
});
export const UserModel =
  mongoose.models.user || mongoose.model("user", UserSchema);
