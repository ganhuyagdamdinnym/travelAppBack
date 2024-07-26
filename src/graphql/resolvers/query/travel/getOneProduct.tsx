import { Id } from "@/generated/client";
import { TravelModel } from "@/models/travel-model";

export const get1Product = async (_: Id, { input }: { input: Id }) => {
  const { id } = input;
  console.log(",,,", input);
  try {
    const product = await TravelModel.findById(id);
    return product;
  } catch (err) {
    console.log(err);
  }
};
