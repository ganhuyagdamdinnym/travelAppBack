import { TravelModel } from "@/models/travel-model";
export const getAllTravel = async () => {
  try {
    const data = await TravelModel.find();
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};
