import { rule } from "graphql-shield";
import type { Context } from "../utils/context";

export const isAuthenticated = rule({ cache: 'contextual' })(
  async (_parent, _args, ctx, _info) => {
    return ctx.user !== null;
  },
);

export const isAdmin = rule({ cache: 'contextual' })(
  async (_parent, _args, ctx: Context, _info) => {
    console.log(ctx.user);
    return ctx.user.role === 'admin';
  },
);

export const isUser = rule({ cache: 'contextual' })(
  async (_parent, _args, ctx: Context, _info) => {
    return ctx.user.role !== 'admin';
  },
);
