import gql from "graphql-tag";


export const getBank = gql`
  query GetBank($id: ID!) {
    bank(id: $id) {
      id
      code
      name
      countryCode
    }
  }
`;

export const getBanks = gql`
  query GetBanks {
    banks {
      id
      code
      name
      countryCode
    }
  }
`;

export const me = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      phone
      countryCode
    }
  }
`

export const getUser = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      email
      phone
      countryCode
    }
  }
`;

export const getUsers = gql`
  query GetUsers {
    users {
      id
      firstName
      lastName
      email
      phone
      countryCode
    }
  }
`;

export const getBankAccount = gql`
  query GetBankAccount($id: ID!) {
    bankAccount(id: $id) {
      id
      userId
      bankId
      accountNumber
      accountName
      bank {
        id
        code
        name
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export const getBankAccounts = gql`
  query GetBankAccounts {
    bankAccounts {
      id
      userId
      bankId
      accountNumber
      accountName
      bank {
        id
        code
        name
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
`;
