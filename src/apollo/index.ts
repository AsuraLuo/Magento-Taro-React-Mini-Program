import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import { policies } from "./policies";
import { shrink } from "./shrink";

const customFetchToShrinkQuery = (uri: string, options: any) => {
  let url = uri;
  if (options.method === "GET") {
    url = shrink(uri);
  }
  return fetch(url, options);
};

export const createClient = () => {
  const httpLink = new HttpLink({
    uri: `${window.location.origin}/graphql`,
    // uri: "http://82.157.172.168/graphql",
    credentials: "same-origin",
    fetch: customFetchToShrinkQuery,
    useGETForQueries: true,
  });

  // HTTP headers middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    const exsistCookies: any = {};
    const storeCode = "";
    const currencyCode = "";
    const context = operation.getContext();
    operation.setContext({
      headers: {
        Authorization: exsistCookies.access_token
          ? `Bearer ${exsistCookies.access_token}`
          : null,
        Store: exsistCookies?.store_code ?? storeCode,
        "Content-Currency": exsistCookies?.currency_code ?? currencyCode,
        ...context?.headers,
      },
    });

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }, index) => {
        graphQLErrors[index].message = message.replace("GraphQL error: ", "");
        console.error(graphQLErrors[index].message);
      });
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const apolloLink = middlewareLink.concat(httpLink);

  return new ApolloClient({
    link: errorLink.concat(apolloLink),
    cache: new InMemoryCache({
      addTypename: false,
      typePolicies: policies,
    }).restore({}),
    connectToDevTools: false,
    ssrMode: false,
    defaultOptions: {
      query: {
        fetchPolicy: "cache-first",
      },
    },
  });
};
