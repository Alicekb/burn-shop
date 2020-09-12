import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export default function createApolloClient(initialState) {
  const ssrMode = typeof window === "undefined";

  return new ApolloClient({
    ssrMode,
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL,
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
