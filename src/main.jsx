import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PokeAppView from "./pokeapp/view/PokeAppView";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PokeAppView />
  </React.StrictMode>
);
