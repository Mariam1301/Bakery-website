import React from "react";
import { Link } from "react-router-dom";
import { Plus, Minus } from "react-feather";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { useState } from "react";

function CounterComponent({ product }) {
  const { setCartProducts } = useContext(CartContext);

  function handleIncrement() {
    if (!product.count) {
      setCartProducts((prevVal) => [...prevVal, { ...product, count: 1 }]);
    } else {
      setCartProducts((prevVal) =>
        prevVal.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, count: cartProduct.count + 1 }
            : cartProduct
        )
      );
    }
  }

  function handleDecrement() {
    if (product.count === 1) {
      setCartProducts((prevVal) =>
        prevVal.filter((cartProduct) => cartProduct.id !== product.id)
      );
    } else {
      setCartProducts((prevVal) =>
        prevVal.map((cartProduct) =>
          cartProduct.id === product.id
            ? { ...cartProduct, count: cartProduct.count-- }
            : cartProduct
        )
      );
    }
  }

  return (
    <div className="flex items-center  rounded-full gap-3">
      {product.count > 0 ? (
        <>
          <button
            className="bg-primary bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full"
            onClick={handleDecrement}
          >
            <Minus className="text-primary" />
          </button>
          <p className="text-primary">{product.count}</p>
        </>
      ) : (
        <></>
      )}
      <button
        className="bg-primary bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full"
        onClick={handleIncrement}
      >
        <Plus className="text-primary" />
      </button>
    </div>
  );
}

export default CounterComponent;
