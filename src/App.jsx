import React from "react";
import ShoppingView from "./Contextos/views/ShoppingView";
import ShopProvider from "./Contextos/contexts/ShopContext";

const App = () => {
  const [completedTasks, setCompletedTasks] = useState(0);

  const incrementCompletedTasks = () => {
    setCompletedTasks(completedTasks + 1);
  };

  const decrementCompletedTasks = () => {
    setCompletedTasks(completedTasks - 1);
  };

  return (
    <ShopProvider>
      <ShoppingView />
    </ShopProvider>
  );
};

export default App;
