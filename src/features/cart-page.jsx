import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartProductItem from "../components/cart-product-item";
import { CartContext } from "../context/cart-context";

function CartPage() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  function handleCartProductIncrement(product) {
    setCartProducts((prevValue) =>
      prevValue.map((cartProduct) =>
        product.id === cartProduct.id
          ? {
              ...cartProduct,
              count: cartProduct.count + 1
            }
          : cartProduct
      )
    );
  }
  function handleCartProductDecrement(product) {
    setCartProducts((prevValue) =>
      product.count === 1
        ? prevValue.filter((cartProduct) => cartProduct.id !== product.id)
        : prevValue.map((cartProduct) =>
            product.id === cartProduct.id
              ? {
                  ...cartProduct,
                  count: cartProduct.count - 1
                }
              : cartProduct
          )
    );
  }
  function handelCartProductDelete(product) {
    setCartProducts((prevValue) =>
      prevValue.filter((cartProduct) => cartProduct.id !== product.id)
    );
  }

  return (
    <div
      className="lg:p-10 p-5 min-h-screen"
      style={{ backgroundColor: "#fcfcfa" }}
    >
      {cartProducts?.length > 0 ? (
        <>
          <p className="mt-16 text-lg font-bold">კალათა</p>
          <div className="mt-8 ">
            {cartProducts.map((product) => (
              <CartProductItem
                key={product.id}
                product={product}
                onIncrement={handleCartProductIncrement}
                onDecrement={handleCartProductDecrement}
                onDelete={handelCartProductDelete}
              ></CartProductItem>
            ))}
          </div>
          <div className="flex items-center max-w-full border-t pt-5 gap-2 px-15 ">
            <p className="uppercase text-xl">სულ: </p>
            <p className="text-xl">
              {cartProducts.reduce(
                (prevVal, nextValue) =>
                  (prevVal += nextValue.price * nextValue.count),
                0
              )}
              ₾
            </p>
          </div>
          <div>
            <button className="py-5 w-full xs:w-1/2 lg:w-1/3  mt-8 px-10 rounded-md bg-primary bg-opacity-10 text-primary">
              <Link to="../user-details">შეკვეთის განთავსება</Link>
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-40">
          <p className="text-gray-400">კალათა ცარიელია</p>
        </div>
      )}
    </div>
  );
}

export default CartPage;
