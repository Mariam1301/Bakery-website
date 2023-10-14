import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "react-feather";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import CounterComponent from "./counter-component";

function ProductCard({ product }) {
  return (
    <div className="border rounded-md hover:scale-105 transition-all shadow-md duration-300">
      <div className="h-52 rounded-t-md  w-full bg-gray-50 flex items-center justify-center">
        <img
          src={product.imageUrl}
          alt="food pic"
          className=" object-cover h-full w-full rounded-t-md"
        />
      </div>
      <div className="px-4 mt-3 pb-4">
        <p className="text-black text-xl font-bold h-14 line-clamp-2">
          {product.name}
        </p>
        <p className="text-gray-400 mt-2">{product.description}</p>
        <div className="flex items-center justify-between  mt-5">
          <p className="text-secordary">{product.price}₾</p>
          <CounterComponent product={product}></CounterComponent>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
