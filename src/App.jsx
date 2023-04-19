import React from "react";
import ShoppingView from "./Contextos/views/ShoppingView";
import ShopProvider from "./Contextos/contexts/ShopContext";

const App = () => {
  return (
    <ShopProvider>
      <ShoppingView />
    </ShopProvider>
  );
};

export default App;
