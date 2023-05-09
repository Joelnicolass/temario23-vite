import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CatsView from "./cats/views/CatsView";
import PokeAppViewLocalPagination from "./pokeapp/view/PokeAppViewLocalPagination";
import { RouterProvider } from "react-router-dom";
import { router } from "./cats/router/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
