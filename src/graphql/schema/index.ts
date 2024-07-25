import { mergeTypeDefs } from "@graphql-tools/merge";
import { UserTypeDefs } from "./user";
import { TravelTypeDefs } from "./travel";
import { OrderTypeDefs } from "./order";

export const TypeDefs = mergeTypeDefs([
  UserTypeDefs,
  TravelTypeDefs,
  OrderTypeDefs,
]);
