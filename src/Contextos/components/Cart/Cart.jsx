import React, { useContext } from "react";
import styles from "./Cart.module.css";
import CART_IMG from "../../../assets/shopping-cart.svg";
import { ShopContext } from "../../contexts/ShopContext";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  return (
    <div className={styles.cartContainer}>
      <img className={styles.cart} src={CART_IMG} alt="cart" />
      <div className={styles.indicator}>
        <p>{cart.length}</p>
      </div>
    </div>
  );
};

export default Cart;
