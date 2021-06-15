import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../comp/home/home";
import NavBar from "../comp/nav/Nav";
import Cart from "../comp/cart/cart";

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Router>
        <NavBar />
        <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />

          {/* <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Single />} path="/single/:id" />
          <Route element={<Search />} path="/search" />
          <Route element={<FourOFour />} path="/*" /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;