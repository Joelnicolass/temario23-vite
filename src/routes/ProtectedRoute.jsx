import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
