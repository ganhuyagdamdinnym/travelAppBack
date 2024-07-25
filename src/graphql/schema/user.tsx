import { gql } from "graphql-tag";

export const UserTypeDefs = gql`
  type User {
    name: String
    email: String
    password: String
    profileImageUrl: String
    phoneNumber: String
    emergencyPhone: String
    point: Int
    gender: String
    currency: String
    favorates: [String]
    payment: [String]
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
    email: String!
    code: Int!
  }
  input emailForSendingVerificationOTPInput {
    email: String!
  }
  input changePasswordInput {
    email: String!
    newPassword: String!
  }
  type message {
    message: String
  }
  input userTokenInput {
    token: String!
  }
  input bankNameInput {
    bankName: String
    email: String
  }
  type Mutation {
    createUser(input: CreateUserInput): User!
    updateUserInfo(input: String): User!
    loginUser(input: loginInput!): String!
    sendCodeToEmail(input: emailForSendingVerificationOTPInput!): String
    verificationCode(input: verificationCodeInput!): String
    changePassword(input: changePasswordInput): String
    addPayment(input: bankNameInput): String
  }
  type Query {
    getAllCustomers: String
    getUserInfo(input: userTokenInput!): User!
  }
`;
