import React from "react";
import { useAuth } from "../auth/context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={logout}>Cerrar Sesion</button>
    </div>
  );
};

export default Home;
