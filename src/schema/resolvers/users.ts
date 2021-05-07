import { IResolvers } from "graphql-tools";
import { getConnection } from "typeorm";
import { User } from "../../database/entities/index";
import { MutationResolvers, QueryResolvers } from "../graphql/generated";

// Trust me, as your project grows, you'll want
// to pick the types for your query and mutation
// resolvers
export const userQueries: Pick<QueryResolvers, "user" | "users"> = {
  user: async (_, { id }) => (await User.findOne(id)) ?? null,
  users: async () => (await User.find()) ?? [],
};

export const userMutations: Pick<
  MutationResolvers,
  "createUser" | "updateUser" | "deleteUser"
> = {
  createUser: async (_, { firstName, lastName, email, phone, countryCode }) => {
    const user = User.create({
      firstName,
      lastName,
      email,
      phone,
      countryCode,
    });

    await user.save();

    return user;
  },
  updateUser: async (_, { id, ...args }) => {
    try {
      await User.update(id, args);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
  deleteUser: async (_, { id }) => {
    try {
      const deleteQuery = getConnection()
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id: id });
      await deleteQuery.execute();
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  },
};

export const users: IResolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
};
