import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// state management
import { Provider } from "react-redux";
import { store } from "./stateMangement";

// Render DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
