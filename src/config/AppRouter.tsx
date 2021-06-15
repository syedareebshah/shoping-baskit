import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../comp/home/home";
import PrimarySearchAppBar from "../comp/nav/Nav";
import Cart from "../comp/cart/cart";
import Contact from "../comp/contact/contact";

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Router>
        <PrimarySearchAppBar />
        <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        </Routes>
        <Contact />
      </Router>
    </div>
  );
};

export default AppRouter;