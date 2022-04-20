import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// impor
import { CartContextProvider } from "./Context/CartContext";
import { LangContextProvider } from "./Context/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </LangContextProvider>
  </React.StrictMode>
);
