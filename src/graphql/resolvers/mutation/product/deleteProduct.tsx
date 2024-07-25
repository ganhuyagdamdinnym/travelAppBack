import { TravelModel } from "@/models/travel-model";
import { DeleteInput } from "@/generated/client";
export const deleteProduct = async (
  _: DeleteInput,
  { input }: { input: DeleteInput },
  context: DeleteInput
) => {
  const { id } = input;
  try {
    const data = await TravelModel.findByIdAndDelete(id);
    return data;
  } catch (err) {
    throw err;
  }
};
