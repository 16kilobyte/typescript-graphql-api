import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";

import { BankAccount } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

export const bankAccountQueries: Pick<QueryResolvers, "bankAccount" | "bankAccounts"> = {
  bankAccount: async (_, { id }) => (await BankAccount.findOne(id)) ?? null,
  bankAccounts: async () => (await BankAccount.find()) ?? [],
};

export const bankAccountMutations: Pick<
  MutationResolvers,
  "createBankAccount" | "updateBankAccount" | "deleteBankAccount"
> = {
  createBankAccount: async (_, { bankId, userId, accountName, accountNumber }) => {
    const bankAccount = BankAccount.create({
      bankId,
      userId,
      accountName,
      accountNumber,
    });

    await bankAccount.save();

    return bankAccount;
  },
  updateBankAccount: async (_, { id, ...args }) => {
    try {
      await BankAccount.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteBankAccount: async (_, { id }) => {
    try {
      const deleteQuery = getConnection()
        .createQueryBuilder()
        .delete()
        .from(BankAccount)
        .where("id = :id", { id: id });
      await deleteQuery.execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const bankAccounts: IResolvers = {
  Query: {
    ...bankAccountQueries,
  },
  Mutation: {
    ...bankAccountMutations,
  },
};
