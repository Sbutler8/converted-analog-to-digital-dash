import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import { ModalProvider } from "./context/Modal";
import { createRoot } from "react-dom/client";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ModalProvider>
  </React.StrictMode>
);
