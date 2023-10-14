import React, { useContext, useRef, useState } from "react";
import CartProductItem from "../components/cart-product-item";
import ProductCard from "../components/product-card";
import { CartContext } from "../context/cart-context";

function UserDetailsPage() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [code, setCode] = useState();

  const [step, setStep] = useState("phoneNumber");

  function handleAcceptButtonClick() {
    if (step === "phoneNumber") {
      setStep("codeInput");
    } else {
    }
  }

  return (
    <div className="mx-10 py-10">
      {step === "phoneNumber" ? (
        <>
          <p className="my-2 text-sm">შეიყვანეთ მობილურის ნომერი</p>
          <div className="  p-1 flex gap-3 items-center border rounded-md">
            <p className="bg-gray-100 px-5 py-1   rounded-xl">+995</p>
            <input
              type="number"
              className="w-full px-5 rounded-md h-12 border-transparent focus:border-transparent focus:ring-0"
              name="phoneNumber"
              placeholder="მობილურის ნომერი"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <p className="my-2 text-sm">შეიყვანეთ კოდი</p>
          <div className="  p-1 flex gap-3 items-center border rounded-md">
            <input
              type="number"
              className="w-full px-5 rounded-md h-12 border-transparent focus:border-transparent focus:ring-0"
              name="phoneNumber"
              placeholder="კოდი"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
        </>
      )}
      <button
        disabled={
          step === "phoneNumber"
            ? phoneNumber?.toString().length < 9
            : code?.toString().length === 0
        }
        onClick={handleAcceptButtonClick}
        className={
          " py-5 w-full xs:w-1/2 lg:w-1/3  mt-8 px-10 rounded-md bg-primary bg-opacity-10 text-primary"
        }
      >
        <p>დადასტურება</p>
      </button>
    </div>
  );
}

export default UserDetailsPage;
