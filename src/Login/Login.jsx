import React from "react";
import { useAuth } from "../auth/context/AuthContext";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    login();

    navigate("/", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="username" type="text" />
        <input id="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
