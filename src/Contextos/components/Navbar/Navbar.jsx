import React from "react";
import styes from "./Navbar.module.css";
import Cart from "../Cart/Cart";

const Navbar = () => {
  return (
    <nav className={styes.navbar}>
      <Cart />
    </nav>
  );
};

export default Navbar;
