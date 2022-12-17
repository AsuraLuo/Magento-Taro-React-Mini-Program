import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";

import { useApp } from "./hooks/App";
import AppShell from "./components/AppShell";

const App = ({ children }) => {
  const { client, store } = useApp();

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppShell>{children}</AppShell>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
