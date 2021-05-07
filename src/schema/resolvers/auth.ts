import bcrypt from "bcrypt";
import type { IResolvers } from "graphql-tools";

import { BankAccount, User } from "../../database/entities";
import type { MutationResolvers, QueryResolvers } from "../graphql/generated";
import type { Context } from "../../utils/context";

export const authQueries: Pick<QueryResolvers<Context>, "me"> = {
  me: async (_, _args, { user }) => {
    if (!user) {
      throw new Error("You are not authenticated!");
    }

    return (await User.findOne(user.id)) ?? null;
  }
}

export const authMutations: Pick<
  MutationResolvers<Context>,
  "login" | "register" | "addBankAccount"
> = {
  login: async (_, { email, password }) => {
    const user = await User.findOne({
      email,
    });

    if (!user) {
     throw new Error("No user with that email");
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error("Incorrect password");
    }

    const token = user.generateJwtToken()

    return {
      token,
      user,
    };
  },
  register: async (_, { firstName, lastName, email, phone, countryCode, password }) => {
    const existing = await User.findOne({
      email,
    });

    if (existing) {
      throw new Error("Email already in use");
    }

    const user = User.create({
      firstName,
      lastName,
      email,
      phone,
      countryCode,
      password,
    });

    await user.save();

    return user;
  },
  addBankAccount: async (_, { bankId, accountName, accountNumber }, { user }) => {
    const bankAccount = BankAccount.create({
      bankId,
      accountName,
      accountNumber,
      user,
    });

    await bankAccount.save();

    return bankAccount;
  }
}

export const auth: IResolvers = {
  Query: {
    ...authQueries,
  },
  Mutation: {
    ...authMutations,
  },
};
