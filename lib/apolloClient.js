import { ApolloClient, InMemoryCache } from "@apollo/client";

export default function createApolloClient(initialState) {
  const ssrMode = typeof window === "undefined";

  return new ApolloClient({
    ssrMode,
    uri: process.env.GRAPHQL_URL,
    cache: new InMemoryCache().restore(initialState),
  });
}
