import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { todoreducer } from "./components/reducers/todoreducer";

export const store = createStore(todoreducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    //{" "}
  </Provider>
);
