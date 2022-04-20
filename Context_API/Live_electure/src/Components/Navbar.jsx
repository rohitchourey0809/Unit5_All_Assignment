import { CartContext } from "../Context/CartContext";
import { LangContext } from "../Context/LanguageContext";

import { useContext } from "react";

export const NAVBAR = () => {
  const { cart } = useContext(CartContext);
  const { lang } = useContext(LangContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        border: "1px solid red",
        margin: "5px",
        fontSize: "50px",
        color: "blue",
      }}
    >
      {lang === "eng" ? "Cart" : "Thela"}:{cart}
    </nav>
  );
};
