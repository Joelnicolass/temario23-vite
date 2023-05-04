import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CatsView from "./cats/views/CatsView";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CatsView />
  </React.StrictMode>
);
