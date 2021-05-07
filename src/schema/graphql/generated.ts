import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Bank: ResolverTypeWrapper<Bank>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  BankAccount: ResolverTypeWrapper<BankAccount>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Bank: Bank;
  String: Scalars['String'];
  User: User;
  BankAccount: BankAccount;
  Mutation: {};
  Boolean: Scalars['Boolean'];
  LoginResponse: LoginResponse;
};

export type BankResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bank'] = ResolversParentTypes['Bank']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BankAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['BankAccount'] = ResolversParentTypes['BankAccount']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  bankId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  accountNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  accountName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bank?: Resolver<ResolversTypes['Bank'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createBank?: Resolver<ResolversTypes['Bank'], ParentType, ContextType, RequireFields<MutationCreateBankArgs, 'code' | 'name' | 'countryCode'>>;
  updateBank?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateBankArgs, 'id' | 'code' | 'name' | 'countryCode'>>;
  deleteBank?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBankArgs, 'id'>>;
  register?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode' | 'password'>>;
  login?: Resolver<Maybe<ResolversTypes['LoginResponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  addBankAccount?: Resolver<ResolversTypes['BankAccount'], ParentType, ContextType, RequireFields<MutationAddBankAccountArgs, 'accountNumber' | 'accountName' | 'bankId'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>>;
  updateUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'id' | 'firstName' | 'lastName' | 'email' | 'phone' | 'countryCode'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  createBankAccount?: Resolver<ResolversTypes['BankAccount'], ParentType, ContextType, RequireFields<MutationCreateBankAccountArgs, 'accountNumber' | 'accountName' | 'userId' | 'bankId'>>;
  updateBankAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateBankAccountArgs, 'id' | 'accountNumber' | 'accountName' | 'userId' | 'bankId'>>;
  deleteBankAccount?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBankAccountArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bank?: Resolver<Maybe<ResolversTypes['Bank']>, ParentType, ContextType, RequireFields<QueryBankArgs, 'id'>>;
  banks?: Resolver<Array<Maybe<ResolversTypes['Bank']>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  bankAccount?: Resolver<Maybe<ResolversTypes['BankAccount']>, ParentType, ContextType, RequireFields<QueryBankAccountArgs, 'id'>>;
  bankAccounts?: Resolver<Array<Maybe<ResolversTypes['BankAccount']>>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countryCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bankAccounts?: Resolver<Array<Maybe<ResolversTypes['BankAccount']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Bank?: BankResolvers<ContextType>;
  BankAccount?: BankAccountResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
