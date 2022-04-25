import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setcart] = useState(0);

  const handlechange = (inc) => {
    setcart(cart + inc);
  };
  return (
    <CartContext.Provider value={{ cart, handlechange }}>
      {children}
    </CartContext.Provider>
  );
};
