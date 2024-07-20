// src/app/apollo-provider.js
"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import client from "src/lib/apolloClient";

export function ApolloProvider({ children }) {
  return <Provider client={client}>{children}</Provider>;
}
