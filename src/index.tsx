import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  createClient,
  Provider,
  subscriptionExchange,
  defaultExchanges,
} from "urql";
import { createClient as createWSClient } from "graphql-ws";

const wsClient = createWSClient({
  url: "ws://localhost:3001/graphql",
});

const client = createClient({
  url: "http://localhost:3001/graphql",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        subscribe: (sink: any) => ({
          unsubscribe: wsClient.subscribe(operation, sink),
        }),
      }),
    }),
  ],
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
