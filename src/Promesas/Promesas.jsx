import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const Promesas = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <>
          <h1>{user.email}</h1>
        </>
      ))}
    </div>
  );
};
export default Promesas;
