import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";

import { Bank } from "../../database/entities";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

export const bankQueries: Pick<QueryResolvers, "bank" | "banks"> = {
  bank: async (_, { id }) => (await Bank.findOne(id)) ?? null,
  banks: async () => (await Bank.find()) ?? [],
};

export const bankMutations: Pick<MutationResolvers, "createBank" | "updateBank" | "deleteBank"> = {
  createBank: async (_, { code, name, countryCode }) => {
    const bank = Bank.create({
      name,
      code,
      countryCode,
    });

    await bank.save();

    return bank;
  },
  updateBank: async (_, { id, ...args }) => {
    try {
      await Bank.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteBank: async (_, { id }) => {
    try {
      const deleteQuery = getConnection()
        .createQueryBuilder()
        .delete()
        .from(Bank)
        .where("id = :id", { id: id });
      await deleteQuery.execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const banks: IResolvers = {
  Query: {
    ...bankQueries,
  },
  Mutation: {
    ...bankMutations,
  },
};
