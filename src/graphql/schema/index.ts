import { mergeTypeDefs } from "@graphql-tools/merge";
import { UserTypeDefs } from "./user";
import { TravelTypeDefs } from "./travel";

export const TypeDefs = mergeTypeDefs([UserTypeDefs, TravelTypeDefs]);
