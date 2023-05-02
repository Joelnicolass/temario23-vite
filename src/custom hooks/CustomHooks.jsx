import React, { useEffect, useState } from "react";
import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";
import { getAllPokemons, getAllUsers } from "./services/getAllUsers";

const CustomHooks = () => {
  const { count, handleDecrement, handleIncrement } = useCounter({
    initialCount: 0,
  });

  const { data, error, isLoading } = useFetch({
    initialState: [],
    service: getAllUsers,
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>

      <div>
        {isLoading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        {data.map((el) => (
          <div key={el.name}>
            <hr />
            <p>{el.name}</p>
          </div>
        ))}

        <button>HACER PETICION</button>
      </div>
    </div>
  );
};

export default CustomHooks;
