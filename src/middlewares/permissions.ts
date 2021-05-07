import { shield, not, and, or } from "graphql-shield";
import { Rule, RuleAnd, RuleNot, RuleOr } from "graphql-shield/dist/rules";

import { isAuthenticated, isAdmin, isUser } from "../utils/rules";
import type { MutationResolvers, QueryResolvers, ResolversTypes } from "../schema/graphql/generated";

type AnyRule = Rule | RuleOr | RuleNot | RuleAnd;;

type Shield = { [key in keyof ResolversTypes]: AnyRule } & {
  Query: {
    [key in keyof Partial<QueryResolvers>]: AnyRule
  }
  Mutation: {
    [key in keyof Partial<MutationResolvers>]: AnyRule;
  };
}

export const permissions = shield({
  Query: {
    banks: and(isAuthenticated, or(isAdmin, isUser)),
    users: isAdmin,
    me: isAuthenticated,
  },
  Mutation: {
    register: not(isAuthenticated),
    login: not(isAuthenticated),
    addBankAccount: isAuthenticated,
    createBank: and(isAuthenticated, isAdmin),
    updateBank: and(isAuthenticated, isAdmin),
    deleteBank: and(isAuthenticated, isAdmin),
    createBankAccount: and(isAuthenticated, isAdmin),
    updateBankAccount: and(isAuthenticated, isAdmin),
    deleteBankAccount: and(isAuthenticated, isAdmin),
  },
  Bank: isAuthenticated,
  User: isAuthenticated,
} as Shield);
