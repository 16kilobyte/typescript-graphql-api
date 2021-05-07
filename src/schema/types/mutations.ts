import gql from "graphql-tag";

export const mutations = gql`
  type Mutation {
    createBank(code: String!, name: String!, countryCode: String!): Bank!
    updateBank(id: ID!, code: String!, name: String!, countryCode: String!): Boolean!
    deleteBank(id: ID!): Boolean!

    register(firstName: String!, lastName: String!, email: String!, phone: String!, countryCode: String!, password: String!): User
    login(email: String!, password: String!): LoginResponse
    addBankAccount(accountNumber: String!, accountName: String!, bankId: String!): BankAccount!

    createUser(firstName: String!, lastName: String!, email: String!, phone: String!, countryCode: String!): User!
    updateUser(id: ID!, firstName: String!, lastName: String!, email: String!, phone: String!, countryCode: String!): Boolean!
    deleteUser(id: ID!): Boolean!
    
    createBankAccount(accountNumber: String!, accountName: String!, userId: String!, bankId: String!): BankAccount!
    updateBankAccount(id: ID!, accountNumber: String!, accountName: String!, userId: String!, bankId: String!): Boolean!
    deleteBankAccount(id: ID!): Boolean!
  }
`;
