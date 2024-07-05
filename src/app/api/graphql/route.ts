import { connect } from "@/mongoDb";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { resolvers } from "@/graphql/resolvers";
import { gql } from "graphql-tag";
import { TypeDefs } from "@/graphql/schema";
connect();
// const resolvers = {
//   Query: {
//     hello: () => "Hello world!",
//   },
// };

const server = new ApolloServer({
  typeDefs: TypeDefs,
  resolvers,
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
