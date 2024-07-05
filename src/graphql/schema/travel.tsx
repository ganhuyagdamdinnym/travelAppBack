import { gql } from "graphql-tag";

export const TravelTypeDefs = gql`
  type runDown {
    title: String
    description: String
  }
  type Info {
    runDown: [runDown!]
    note: String
  }

  input RunDownInput {
    title: String!
    description: String!
  }

  input InformationInput {
    runDown: [RunDownInput!]!
    note: String!
  }
  type Travel {
    _id: String!
    name: String!
    imageUrl: String!
    location: String!
    price: Int!
    description: String!
    rating: Int!
    startAt: String!
    endAt: String!
    duration: String!
    informations: Info!
    facilities: [String!]
  }
  input DeleteInput {
    id: String
  }
    input Id{
    id:String
    }
  input TravelInput {
    name: String!
    imageUrl: String!
    location: String!
    price: Int!
    description: String!
    rating: Int!
    startAt: String!
    endAt: String!
    duration: String!
    facilities: [String!]
    informations: InformationInput!
  }
  type Mutation {
    createTravel(input: TravelInput): Travel
    deleteProduct(input: DeleteInput): Travel
  }
  type Query {
    getAllTravel: [Travel!]
    get1Product(input:Id):Travel
  }
`;
