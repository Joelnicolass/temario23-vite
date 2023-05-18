import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes/appRoutes";
import AuthProvider from "./auth/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={appRoutes} />
    </AuthProvider>
  </React.StrictMode>
);
