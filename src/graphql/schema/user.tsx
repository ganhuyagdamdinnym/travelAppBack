import { gql } from "graphql-tag";

export const UserTypeDefs = gql`
  type User {
    name: String
    email: String
    password: String
  }
  input CreateUserInput {
    name: String
    email: String
    password: String
  }
  type Mutation {
    createUser(input: CreateUserInput): User
    updateUserInfo(input: String): User
  }
`;
