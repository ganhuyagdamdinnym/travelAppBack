import { gql } from "graphql-tag";

export const OrderTypeDefs = gql`
  type order {
    _id: String
    userId: String
    couponCode: String
    createdAt: String
    state: String
  }
  input createOrderInput {
    ticketQuantity: Int
    couponCode: String
    createdAt: String
    userEmail: String
  }
  type Mutation {
    createOrder(input: createOrderInput!): String
  }
`;
