import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bank = {
  __typename?: 'Bank';
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  countryCode: Scalars['String'];
};

export type BankAccount = {
  __typename?: 'BankAccount';
  id: Scalars['ID'];
  userId: Scalars['ID'];
  bankId: Scalars['ID'];
  accountNumber: Scalars['String'];
  accountName: Scalars['String'];
  bank: Bank;
  user: User;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBank: Bank;
  updateBank: Scalars['Boolean'];
  deleteBank: Scalars['Boolean'];
  register?: Maybe<User>;
  login?: Maybe<LoginResponse>;
  addBankAccount: BankAccount;
  createUser: User;
  updateUser: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  createBankAccount: BankAccount;
  updateBankAccount: Scalars['Boolean'];
  deleteBankAccount: Scalars['Boolean'];
};


export type MutationCreateBankArgs = {
  code: Scalars['String'];
  name: Scalars['String'];
  countryCode: Scalars['String'];
};


export type MutationUpdateBankArgs = {
  id: Scalars['ID'];
  code: Scalars['String'];
  name: Scalars['String'];
  countryCode: Scalars['String'];
};


export type MutationDeleteBankArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryCode: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationAddBankAccountArgs = {
  accountNumber: Scalars['String'];
  accountName: Scalars['String'];
  bankId: Scalars['String'];
};


export type MutationCreateUserArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryCode: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryCode: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBankAccountArgs = {
  accountNumber: Scalars['String'];
  accountName: Scalars['String'];
  userId: Scalars['String'];
  bankId: Scalars['String'];
};


export type MutationUpdateBankAccountArgs = {
  id: Scalars['ID'];
  accountNumber: Scalars['String'];
  accountName: Scalars['String'];
  userId: Scalars['String'];
  bankId: Scalars['String'];
};


export type MutationDeleteBankAccountArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  bank?: Maybe<Bank>;
  banks: Array<Maybe<Bank>>;
  me?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<Maybe<User>>;
  bankAccount?: Maybe<BankAccount>;
  bankAccounts: Array<Maybe<BankAccount>>;
};


export type QueryBankArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryBankAccountArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryCode: Scalars['String'];
  bankAccounts: Array<Maybe<BankAccount>>;
};

export type CreateBankMutationVariables = Exact<{
  name: Scalars['String'];
  code: Scalars['String'];
  countryCode: Scalars['String'];
}>;


export type CreateBankMutation = (
  { __typename?: 'Mutation' }
  & { createBank: (
    { __typename?: 'Bank' }
    & Pick<Bank, 'name' | 'code' | 'countryCode'>
  ) }
);

export type UpdateBankMutationVariables = Exact<{
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  countryCode: Scalars['String'];
}>;


export type UpdateBankMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateBank'>
);

export type DeleteBankMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBankMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBank'>
);

export type RegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryCode: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>
    ) }
  )> }
);

export type AddBankAccountMutationVariables = Exact<{
  accountNumber: Scalars['String'];
  accountName: Scalars['String'];
  bankId: Scalars['String'];
}>;


export type AddBankAccountMutation = (
  { __typename?: 'Mutation' }
  & { addBankAccount: (
    { __typename?: 'BankAccount' }
    & Pick<BankAccount, 'accountNumber' | 'accountName'>
    & { bank: (
      { __typename?: 'Bank' }
      & Pick<Bank, 'id' | 'code' | 'name'>
    ), user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryCode: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  countryCode: Scalars['String'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateUser'>
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteUser'>
);

export type CreateBankAccountMutationVariables = Exact<{
  accountNumber: Scalars['String'];
  accountName: Scalars['String'];
  userId: Scalars['String'];
  bankId: Scalars['String'];
}>;


export type CreateBankAccountMutation = (
  { __typename?: 'Mutation' }
  & { createBankAccount: (
    { __typename?: 'BankAccount' }
    & Pick<BankAccount, 'accountNumber' | 'accountName'>
    & { bank: (
      { __typename?: 'Bank' }
      & Pick<Bank, 'id' | 'code' | 'name'>
    ), user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ) }
  ) }
);

export type UpdateBankAccountMutationVariables = Exact<{
  id: Scalars['ID'];
  accountNumber: Scalars['String'];
  accountName: Scalars['String'];
  userId: Scalars['String'];
  bankId: Scalars['String'];
}>;


export type UpdateBankAccountMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateBankAccount'>
);

export type DeleteBankAccountMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBankAccountMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBankAccount'>
);

export type GetBankQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBankQuery = (
  { __typename?: 'Query' }
  & { bank?: Maybe<(
    { __typename?: 'Bank' }
    & Pick<Bank, 'id' | 'code' | 'name' | 'countryCode'>
  )> }
);

export type GetBanksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksQuery = (
  { __typename?: 'Query' }
  & { banks: Array<Maybe<(
    { __typename?: 'Bank' }
    & Pick<Bank, 'id' | 'code' | 'name' | 'countryCode'>
  )>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>
  )> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>
  )>> }
);

export type GetBankAccountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetBankAccountQuery = (
  { __typename?: 'Query' }
  & { bankAccount?: Maybe<(
    { __typename?: 'BankAccount' }
    & Pick<BankAccount, 'id' | 'userId' | 'bankId' | 'accountNumber' | 'accountName'>
    & { bank: (
      { __typename?: 'Bank' }
      & Pick<Bank, 'id' | 'code' | 'name'>
    ), user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ) }
  )> }
);

export type GetBankAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBankAccountsQuery = (
  { __typename?: 'Query' }
  & { bankAccounts: Array<Maybe<(
    { __typename?: 'BankAccount' }
    & Pick<BankAccount, 'id' | 'userId' | 'bankId' | 'accountNumber' | 'accountName'>
    & { bank: (
      { __typename?: 'Bank' }
      & Pick<Bank, 'id' | 'code' | 'name'>
    ), user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastName'>
    ) }
  )>> }
);


export const CreateBankDocument = gql`
    mutation CreateBank($name: String!, $code: String!, $countryCode: String!) {
  createBank(name: $name, code: $code, countryCode: $countryCode) {
    name
    code
    countryCode
  }
}
    `;
export type CreateBankMutationFn = ApolloReactCommon.MutationFunction<CreateBankMutation, CreateBankMutationVariables>;
export type CreateBankProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateBankMutation, CreateBankMutationVariables>
    } & TChildProps;
export function withCreateBank<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBankMutation,
  CreateBankMutationVariables,
  CreateBankProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBankMutation, CreateBankMutationVariables, CreateBankProps<TChildProps, TDataName>>(CreateBankDocument, {
      alias: 'createBank',
      ...operationOptions
    });
};
export type CreateBankMutationResult = ApolloReactCommon.MutationResult<CreateBankMutation>;
export type CreateBankMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBankMutation, CreateBankMutationVariables>;
export const UpdateBankDocument = gql`
    mutation UpdateBank($id: ID!, $name: String!, $code: String!, $countryCode: String!) {
  updateBank(id: $id, name: $name, code: $code, countryCode: $countryCode)
}
    `;
export type UpdateBankMutationFn = ApolloReactCommon.MutationFunction<UpdateBankMutation, UpdateBankMutationVariables>;
export type UpdateBankProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateBankMutation, UpdateBankMutationVariables>
    } & TChildProps;
export function withUpdateBank<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBankMutation,
  UpdateBankMutationVariables,
  UpdateBankProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBankMutation, UpdateBankMutationVariables, UpdateBankProps<TChildProps, TDataName>>(UpdateBankDocument, {
      alias: 'updateBank',
      ...operationOptions
    });
};
export type UpdateBankMutationResult = ApolloReactCommon.MutationResult<UpdateBankMutation>;
export type UpdateBankMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBankMutation, UpdateBankMutationVariables>;
export const DeleteBankDocument = gql`
    mutation DeleteBank($id: ID!) {
  deleteBank(id: $id)
}
    `;
export type DeleteBankMutationFn = ApolloReactCommon.MutationFunction<DeleteBankMutation, DeleteBankMutationVariables>;
export type DeleteBankProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteBankMutation, DeleteBankMutationVariables>
    } & TChildProps;
export function withDeleteBank<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBankMutation,
  DeleteBankMutationVariables,
  DeleteBankProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBankMutation, DeleteBankMutationVariables, DeleteBankProps<TChildProps, TDataName>>(DeleteBankDocument, {
      alias: 'deleteBank',
      ...operationOptions
    });
};
export type DeleteBankMutationResult = ApolloReactCommon.MutationResult<DeleteBankMutation>;
export type DeleteBankMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBankMutation, DeleteBankMutationVariables>;
export const RegisterDocument = gql`
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
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>
    } & TChildProps;
export function withRegister<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps, TDataName>>(RegisterDocument, {
      alias: 'register',
      ...operationOptions
    });
};
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
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
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>
    } & TChildProps;
export function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>(LoginDocument, {
      alias: 'login',
      ...operationOptions
    });
};
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const AddBankAccountDocument = gql`
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
export type AddBankAccountMutationFn = ApolloReactCommon.MutationFunction<AddBankAccountMutation, AddBankAccountMutationVariables>;
export type AddBankAccountProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddBankAccountMutation, AddBankAccountMutationVariables>
    } & TChildProps;
export function withAddBankAccount<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddBankAccountMutation,
  AddBankAccountMutationVariables,
  AddBankAccountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddBankAccountMutation, AddBankAccountMutationVariables, AddBankAccountProps<TChildProps, TDataName>>(AddBankAccountDocument, {
      alias: 'addBankAccount',
      ...operationOptions
    });
};
export type AddBankAccountMutationResult = ApolloReactCommon.MutationResult<AddBankAccountMutation>;
export type AddBankAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<AddBankAccountMutation, AddBankAccountMutationVariables>;
export const CreateUserDocument = gql`
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
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: ID!, $firstName: String!, $lastName: String!, $email: String!, $phone: String!, $countryCode: String!) {
  updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone, countryCode: $countryCode)
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export type UpdateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>
    } & TChildProps;
export function withUpdateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserMutation,
  UpdateUserMutationVariables,
  UpdateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserMutation, UpdateUserMutationVariables, UpdateUserProps<TChildProps, TDataName>>(UpdateUserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(id: $id)
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;
export type DeleteUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>
    } & TChildProps;
export function withDeleteUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteUserMutation,
  DeleteUserMutationVariables,
  DeleteUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteUserMutation, DeleteUserMutationVariables, DeleteUserProps<TChildProps, TDataName>>(DeleteUserDocument, {
      alias: 'deleteUser',
      ...operationOptions
    });
};
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateBankAccountDocument = gql`
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
export type CreateBankAccountMutationFn = ApolloReactCommon.MutationFunction<CreateBankAccountMutation, CreateBankAccountMutationVariables>;
export type CreateBankAccountProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateBankAccountMutation, CreateBankAccountMutationVariables>
    } & TChildProps;
export function withCreateBankAccount<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateBankAccountMutation,
  CreateBankAccountMutationVariables,
  CreateBankAccountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateBankAccountMutation, CreateBankAccountMutationVariables, CreateBankAccountProps<TChildProps, TDataName>>(CreateBankAccountDocument, {
      alias: 'createBankAccount',
      ...operationOptions
    });
};
export type CreateBankAccountMutationResult = ApolloReactCommon.MutationResult<CreateBankAccountMutation>;
export type CreateBankAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBankAccountMutation, CreateBankAccountMutationVariables>;
export const UpdateBankAccountDocument = gql`
    mutation UpdateBankAccount($id: ID!, $accountNumber: String!, $accountName: String!, $userId: String!, $bankId: String!) {
  updateBankAccount(id: $id, accountNumber: $accountNumber, accountName: $accountName, userId: $userId, bankId: $bankId)
}
    `;
export type UpdateBankAccountMutationFn = ApolloReactCommon.MutationFunction<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>;
export type UpdateBankAccountProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>
    } & TChildProps;
export function withUpdateBankAccount<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateBankAccountMutation,
  UpdateBankAccountMutationVariables,
  UpdateBankAccountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateBankAccountMutation, UpdateBankAccountMutationVariables, UpdateBankAccountProps<TChildProps, TDataName>>(UpdateBankAccountDocument, {
      alias: 'updateBankAccount',
      ...operationOptions
    });
};
export type UpdateBankAccountMutationResult = ApolloReactCommon.MutationResult<UpdateBankAccountMutation>;
export type UpdateBankAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>;
export const DeleteBankAccountDocument = gql`
    mutation DeleteBankAccount($id: ID!) {
  deleteBankAccount(id: $id)
}
    `;
export type DeleteBankAccountMutationFn = ApolloReactCommon.MutationFunction<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>;
export type DeleteBankAccountProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>
    } & TChildProps;
export function withDeleteBankAccount<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  DeleteBankAccountMutation,
  DeleteBankAccountMutationVariables,
  DeleteBankAccountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, DeleteBankAccountMutation, DeleteBankAccountMutationVariables, DeleteBankAccountProps<TChildProps, TDataName>>(DeleteBankAccountDocument, {
      alias: 'deleteBankAccount',
      ...operationOptions
    });
};
export type DeleteBankAccountMutationResult = ApolloReactCommon.MutationResult<DeleteBankAccountMutation>;
export type DeleteBankAccountMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>;
export const GetBankDocument = gql`
    query GetBank($id: ID!) {
  bank(id: $id) {
    id
    code
    name
    countryCode
  }
}
    `;
export type GetBankProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBankQuery, GetBankQueryVariables>
    } & TChildProps;
export function withGetBank<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBankQuery,
  GetBankQueryVariables,
  GetBankProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBankQuery, GetBankQueryVariables, GetBankProps<TChildProps, TDataName>>(GetBankDocument, {
      alias: 'getBank',
      ...operationOptions
    });
};
export type GetBankQueryResult = ApolloReactCommon.QueryResult<GetBankQuery, GetBankQueryVariables>;
export const GetBanksDocument = gql`
    query GetBanks {
  banks {
    id
    code
    name
    countryCode
  }
}
    `;
export type GetBanksProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBanksQuery, GetBanksQueryVariables>
    } & TChildProps;
export function withGetBanks<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBanksQuery,
  GetBanksQueryVariables,
  GetBanksProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBanksQuery, GetBanksQueryVariables, GetBanksProps<TChildProps, TDataName>>(GetBanksDocument, {
      alias: 'getBanks',
      ...operationOptions
    });
};
export type GetBanksQueryResult = ApolloReactCommon.QueryResult<GetBanksQuery, GetBanksQueryVariables>;
export const MeDocument = gql`
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
    `;
export type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>
    } & TChildProps;
export function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>(MeDocument, {
      alias: 'me',
      ...operationOptions
    });
};
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const GetUserDocument = gql`
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
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
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
export type GetUsersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUsersQuery, GetUsersQueryVariables>
    } & TChildProps;
export function withGetUsers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUsersQuery,
  GetUsersQueryVariables,
  GetUsersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUsersQuery, GetUsersQueryVariables, GetUsersProps<TChildProps, TDataName>>(GetUsersDocument, {
      alias: 'getUsers',
      ...operationOptions
    });
};
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetBankAccountDocument = gql`
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
export type GetBankAccountProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBankAccountQuery, GetBankAccountQueryVariables>
    } & TChildProps;
export function withGetBankAccount<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBankAccountQuery,
  GetBankAccountQueryVariables,
  GetBankAccountProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBankAccountQuery, GetBankAccountQueryVariables, GetBankAccountProps<TChildProps, TDataName>>(GetBankAccountDocument, {
      alias: 'getBankAccount',
      ...operationOptions
    });
};
export type GetBankAccountQueryResult = ApolloReactCommon.QueryResult<GetBankAccountQuery, GetBankAccountQueryVariables>;
export const GetBankAccountsDocument = gql`
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
export type GetBankAccountsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetBankAccountsQuery, GetBankAccountsQueryVariables>
    } & TChildProps;
export function withGetBankAccounts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetBankAccountsQuery,
  GetBankAccountsQueryVariables,
  GetBankAccountsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetBankAccountsQuery, GetBankAccountsQueryVariables, GetBankAccountsProps<TChildProps, TDataName>>(GetBankAccountsDocument, {
      alias: 'getBankAccounts',
      ...operationOptions
    });
};
export type GetBankAccountsQueryResult = ApolloReactCommon.QueryResult<GetBankAccountsQuery, GetBankAccountsQueryVariables>;