import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "react-feather";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

function HeaderComponent() {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="h-20 px-10 w-full border-b  flex items-center justify-between ">
      <Link to="/">
        <div className="border px-8 py-3">
          <p className="text-2xl text-black font-bold">LOGO</p>
        </div>
      </Link>
      <Link to="cart">
        <div className="flex text-secordary items-center gap-2 bg-secordary bg-opacity-10 py-3 px-6 rounded-xl">
          კალათა
          <div className="relative">
            {cartProducts.length > 0 ? (
              <div className="w-4 h-4 text-xs flex items-center justify-center bg-red-600 rounded-full text-white -top-1 -right-1 absolute">
                {cartProducts?.length}
              </div>
            ) : (
              ""
            )}
            <ShoppingBag />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HeaderComponent;
