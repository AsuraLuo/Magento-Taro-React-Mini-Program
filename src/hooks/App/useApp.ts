import { createClient } from "../../apollo";
import { createStore } from "../../store";

export const useApp = () => {
  const client = createClient();
  const store = createStore();

  return {
    client,
    store,
  };
};
