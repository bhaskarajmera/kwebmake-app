// src/app/apollo-provider.js
"use client";

import { ApolloProvider as Provider } from "@apollo/client";
import client from "src/lib/apolloclient";

export function ApolloProvider({ children }) {
  return <Provider client={client}>{children}</Provider>;
}
