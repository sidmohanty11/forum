import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { Query, Mutation } from "./resolvers";
import { PrismaClient } from "@prisma/client";
import { getUserFromToken } from "./utils/getUserFromToken";

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation },
  context: ({ req }: any) => ({
    prisma,
    userInfo: getUserFromToken(req.headers.authorization),
  }),
});

server.listen().then(({ url }) => console.log(`Server listening at ${url}`));
