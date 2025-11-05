import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
