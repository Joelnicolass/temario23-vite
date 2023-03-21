import React from "react";
import Nombre from "./Nombre";

const Hola = ({ children }) => {
  return (
    <div>
      <h1>hola</h1>
      {children}
    </div>
  );
};

export default Hola;
