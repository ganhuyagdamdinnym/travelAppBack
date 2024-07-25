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
    userId: String!
    couponCode: String
    createdAt: String
  }
  type Mutation {
    createOrder(input: createOrderInput!): String
  }
`;
