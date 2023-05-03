import React, { useEffect, useState } from "react";
import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";
import { getAllUsersService } from "./services/getAllUsers";

const CustomHooks = () => {
  const { count, handleDecrement, handleIncrement } = useCounter({
    initialValue: 10,
  });

  const {
    data: users,
    error,
    isLoading,
    refetch,
  } = useFetch({
    initialState: [],
    url: "https://jsonplaceholder.typicode.com/users",
    service: getAllUsersService,
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
          </div>
        ))}

        <button onClick={refetch}>Pedir Usuarios</button>
      </div>
    </div>
  );
};

export default CustomHooks;
