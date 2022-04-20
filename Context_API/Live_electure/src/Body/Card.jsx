import { CartContext } from "../Context/CartContext";

import { useContext } from "react";

export const CARD = () => {
  const { handlechange } = useContext(CartContext);
  return (
    <div
      style={{
        width: "200px",
        height: "auto",
        padding: "10px",
        background: "teal",
      }}
    >
      <button
        onClick={() => {
          handlechange(1);
        }}
      >
        Add To Card
      </button>
    </div>
  );
};

// import { cartContext } from "../Context/CartContext"
// // import {}

// import { createContext } from "react"

// export const CartContext = createContext();
//jsx
//  export const CartContextProvider(JSX attribute) React.CartContextProvider
