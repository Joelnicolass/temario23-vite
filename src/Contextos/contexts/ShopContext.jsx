import React, { createContext, useState } from "react";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
