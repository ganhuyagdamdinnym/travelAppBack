import { TravelModel } from "@/models/travel-model";
import { IdInput } from "@/generated/client";
export const deleteProduct = async (
  _: IdInput,
  { input }: { input: IdInput },
  context: IdInput
) => {
  const { id } = input;
  try {
    const data = await TravelModel.findByIdAndDelete(id);
    return data;
  } catch (err) {
    throw err;
  }
};
