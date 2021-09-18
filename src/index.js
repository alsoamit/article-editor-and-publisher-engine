import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// state management
import { Provider } from "react-redux";
import { store } from "./stateMangement";

// save the data to localstorage every time the state changes
store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

// Render DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
