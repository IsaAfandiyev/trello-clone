import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/variables/index.css";
import "./assets/styles/reset.css";
import "./assets/styles/index.css";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
