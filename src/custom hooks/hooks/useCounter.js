import React, { useState } from "react";

const useCounter = ({ initialValue = 0 } = {}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return { count, handleIncrement, handleDecrement };
};

export default useCounter;
