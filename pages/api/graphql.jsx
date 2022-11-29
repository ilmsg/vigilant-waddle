import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
    api: {
        bodyParser: false
    }
};

const startServer = apolloServer.start();
export default async (req, res) => {
    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
      })(req, res);
}
