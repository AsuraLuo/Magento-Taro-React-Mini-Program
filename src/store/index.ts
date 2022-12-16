import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import { reducer as appReducer } from "./app";
import { reducer as cartReducer } from "./cart";

const rootReducer = {
  app: appReducer,
  cart: cartReducer,
};

const isLogger = process.env.REACT_APP_REDUX_LOGGER === "true";
const isProd = process.env.NODE_ENV === "production";

export const createStore = () => {
  const middleware: any = [];
  const logger = createLogger({
    collapsed: false,
  });

  if (isLogger) middleware.push(logger);

  return configureStore({
    reducer: combineReducers(rootReducer),
    devTools: !isProd,
    preloadedState: {},
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      ...middleware,
    ],
  });
};
