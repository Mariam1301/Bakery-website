// context.js
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const cartProductsFromLocalStorage = JSON.parse(
  localStorage.getItem("cartProducts" || "[]")
);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    cartProductsFromLocalStorage
  );

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
