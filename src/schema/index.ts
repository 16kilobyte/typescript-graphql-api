import { makeExecutableSchema } from "graphql-tools";
import { auth, users, banks, bankAccounts } from "./resolvers";
import { types, queries, mutations } from "./types";

export const schema = makeExecutableSchema({
  typeDefs: [types, queries, mutations],
  resolvers: [auth, users, banks, bankAccounts],
});
