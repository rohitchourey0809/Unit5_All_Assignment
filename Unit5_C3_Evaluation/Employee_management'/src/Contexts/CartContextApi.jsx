import { createContext, useState } from "react";
export const CartContext = createContext(); //?create Empty Box

//?Provider = Provdes the value
//?Consumer = takes the value
export const CartContextProvider = ({ children }) => {
  //*Connect app to box
  const [cart, setcart] = useState(0);
  // const [cart1, setcart1] = useState(0);

  const handlechange = (inc) => {
    setcart(cart + inc);
  };

  //>handlechange(1)
  return (
    <CartContext.Provider value={{ cart, handlechange }}>
      {children}
    </CartContext.Provider>
  );
};
