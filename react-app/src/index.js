import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import { ModalProvider } from "./context/Modal";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.csrfFetch = fetch;
  window.store = store;
  window.sessionActions = sessionActions;
}


ReactDOM.render(
  <React.StrictMode>
      <ModalProvider >
        <Provider store={store}>
          <App />
        </Provider>
      </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
