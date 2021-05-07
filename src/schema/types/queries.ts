import gql from "graphql-tag";

export const queries = gql`
  type Query {
    bank(id: ID!): Bank
    banks: [Bank]!

    me: User

    user(id: ID!): User
    users: [User]!
    
    bankAccount(id: ID!): BankAccount
    bankAccounts: [BankAccount]!
  }
`;
