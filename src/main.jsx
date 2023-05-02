import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PokeAppView from "./pokeapp/view/PokeAppView";
import PokeAppViewLocalPagination from "./pokeapp/view/PokeAppViewLocalPagination";
import CustomHooks from "./custom hooks/CustomHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomHooks />
  </React.StrictMode>
);
