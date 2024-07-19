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
  input loginInput {
    password: String
    email: String
  }
  input verificationCodeInput {
    code: String
  }
  input emailForSendingVerificationOTPInput {
    email: String!
  }
  type Mutation {
    createUser(input: CreateUserInput): User!
    updateUserInfo(input: String): User!
    loginUser(input: loginInput!): String!
    sendCodeToEmail(input: emailForSendingVerificationOTPInput!): Int
    verificationCode(input: verificationCodeInput): String
  }
  type Query {
    getAllCustomers: String
  }
`;
