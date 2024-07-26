import { TravelModel } from "@/models/travel-model";
import { TravelInput } from "@/generated/client";

export const createTravel = async (
  _: any,
  { input }: { input: TravelInput }
) => {
  const {
    name,
    location,
    price,
    rating,
    imageUrl,
    startAt,
    endAt,
    duration,
    facilities,
    description,
    informations,
  } = input;

  try {
    const product = await TravelModel.create({
      name,
      location,
      price,
      rating,
      imageUrl,
      startAt,
      endAt,
      duration,
      facilities,
      description,
      informations,
    });
    console.log(product);
    return product;
  } catch (err) {
    console.error("Error creating", err);
  }
};
