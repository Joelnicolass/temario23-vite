import React from "react";
import Saludo from "./Saludo";

const Contenedor = () => {
  const nombre = "Fernanda";

  return (
    <div>
      <Saludo name={nombre} />
    </div>
  );
};

export default Contenedor;
