import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import store from "./components/store";
import styles from "../assets/styles/app.scss";

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("login-sign-up")
);
