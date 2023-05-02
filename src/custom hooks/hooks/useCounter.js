import { useState } from "react";

const useCounter = ({ initialCount = 0, incrementBy = 1 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementBy = () => {
    setCount(count + incrementBy);
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
    handleIncrementBy,
  };
};

export default useCounter;
