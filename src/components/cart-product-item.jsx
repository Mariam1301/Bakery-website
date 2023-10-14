import React from "react";
import { Plus, Minus, Trash2 } from "react-feather";
import CounterComponent from "./counter-component";

function CartProductItem({ product, onIncrement, onDecrement, onDelete }) {
  return (
    <div className="border-t  my-2 ">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-5" style={{ width: "60%" }}>
          {/* <div className="w-20 h-20 bg-gray-100 flex items-center justify-center"> */}
          <img
            src={product.imageUrl}
            alt=""
            className="rounded-md"
            style={{ maxHeight: "60px", maxWidth: "60px" }}
          />
          {/* </div> */}
          <div>
            <p className=" font-bold w-full">{product.name}</p>
            <p className="text-gray-400">{product.price} ₾</p>
          </div>
        </div>

        <div className="flex items-center gap-2" style={{ width: "20%" }}>
          <button
            className="flex items-center justify-center"
            onClick={() => onDecrement(product)}
          >
            <Minus className="text-secordary" />
          </button>
          <p>{product.count}</p>
          <button
            className="flex items-center justify-center"
            onClick={() => onIncrement(product)}
          >
            <Plus className="text-secordary" />
          </button>
        </div>

        <button
          className="flex items-center justify-center"
          style={{ width: "10%" }}
          onClick={() => onDelete(product)}
        >
          <Trash2 className="text-secordary w-5" />
        </button>
      </div>
    </div>
  );
}

export default CartProductItem;
