import React, { useEffect, useState, useRef } from "react";

const Ejemplo = () => {
  const [count, setCount] = useState(0);
  const isInitialMount = useRef(true);

  const prevValue = useRef(null);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    console.log("peticion a una api");
  }, [count]);

  return (
    <div>
      <h2>count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      ></button>
    </div>
  );
};

export default Ejemplo;
