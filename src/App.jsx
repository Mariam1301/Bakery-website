import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "./features/cart-page";
import ProductListingPage from "./features/product-listing-page";
import HeaderComponent from "./components/header-component";
import CartProvider from "./context/cart-context";
import UserDetailsPage from "./features/user-detail-page";

function App() {
  return (
    <>
      <CartProvider>
        <HeaderComponent />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/user-details" element={<UserDetailsPage />} />
          <Route path="/" element={<ProductListingPage />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
