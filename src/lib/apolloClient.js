import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://astralpaints.kwebmakerdigitalagency.com/graphql", // replace with your GraphQL endpoint
  }),
  cache: new InMemoryCache(),
});

export default client;
