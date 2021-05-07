import gql from "graphql-tag";

export const types = gql`
  type Bank {
    id: ID!
    code: String!
    name: String!
    countryCode: String!
  }
  type LoginResponse {
    token: String!
    user: User!
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    countryCode: String!
    bankAccounts: [BankAccount]!
  }
  type BankAccount {
    id: ID!
    userId: ID!
    bankId: ID!
    accountNumber: String!
    accountName: String!
    bank: Bank!
    user: User!
  }
`;
