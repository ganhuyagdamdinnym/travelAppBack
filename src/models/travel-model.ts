import { model, Schema } from "mongoose";
import mongoose from "mongoose";

const TravelSchema = new mongoose.Schema({
  imageUrl: String,
  location: String,
  name: String,
  price: Number,
  type: String,
  description: String,
  rating: Number,
  startAt: String,
  endAt: String,
  duration: String,
  informations: {
    runDown: [{ title: String, description: String }],
    note: String,
  },
  facilities: [String],
});
export const TravelModel =
  mongoose.models.travel || mongoose.model("travel", TravelSchema);
