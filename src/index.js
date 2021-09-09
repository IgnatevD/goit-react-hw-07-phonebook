/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./components/App";
import allStore from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={allStore.store}>
      <PersistGate loading={null} persistor={allStore.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
