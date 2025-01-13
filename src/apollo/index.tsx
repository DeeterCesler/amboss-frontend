'use client';

import { ApolloClient, ApolloProvider, InMemoryCache, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.amboss.space/graphql',
  cache: new InMemoryCache(),
  credentials: 'include',
});

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export const query = (gql:any) => {
  return useQuery(gql);
}
