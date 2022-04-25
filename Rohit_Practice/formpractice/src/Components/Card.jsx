import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const Card = () => {
  const { handlechange } = useContext(CartContext);
  return (
    <div>
      <h2>value</h2>
      <button onClick={handlechange(1)} btn-btn-default>
        CardButton
      </button>
    </div>
  );
};
