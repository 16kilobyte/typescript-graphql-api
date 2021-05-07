import gql from "graphql-tag";

export const createBank = gql`
  mutation CreateBank($name: String!, $code: String!, $countryCode: String!) {
    createBank(name: $name, code: $code, countryCode: $countryCode) {
      name
      code
      countryCode
    }
  }
`;

export const updateBank = gql`
  mutation UpdateBank($id: ID!, $name: String!, $code: String!, $countryCode: String!) {
    updateBank(id: $id, name: $name, code: $code, countryCode: $countryCode)
  }
`;

export const deleteBank = gql`
  mutation DeleteBank($id: ID!) {
    deleteBank(id: $id)
  }
`;

export const register = gql`
  mutation Register($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $countryCode: String!, $password: String!) {
    register(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, countryCode: $countryCode, password: $password) {
      id
      firstName
      lastName
      email
      phone
      countryCode
    }
  }
`

export const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        firstName
        lastName
        email
        phone
        countryCode
      }
    }
  }
`
export const addBankAccount = gql`
  mutation AddBankAccount($accountNumber: String!, $accountName: String!, $bankId: String!) {
    addBankAccount(accountNumber: $accountNumber, accountName: $accountName, bankId: $bankId) {
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

export const createUser = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $phone: String!, $countryCode: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, countryCode: $countryCode) {
      firstName
      lastName
      email
      phone
      countryCode
    }
  }
`;

export const updateUser = gql`
  mutation UpdateUser($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $phone: String!, $countryCode: String!) {
    updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, countryCode: $countryCode)
  }
`;

export const deleteUser = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;

export const createBankAccount = gql`
  mutation CreateBankAccount($accountNumber: String!, $accountName: String!, $userId: String!, $bankId: String!) {
    createBankAccount(accountNumber: $accountNumber, accountName: $accountName, userId: $userId, bankId: $bankId) {
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

export const updateBankAccount = gql`
  mutation UpdateBankAccount($id: ID!, $accountNumber: String!, $accountName: String!, $userId: String!, $bankId: String!) {
    updateBankAccount(id: $id, accountNumber: $accountNumber, accountName: $accountName, userId: $userId, bankId: $bankId)
  }
`;

export const deleteBankAccount = gql`
  mutation DeleteBankAccount($id: ID!) {
    deleteBankAccount(id: $id)
  }
`;
