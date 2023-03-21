import React from "react";
import Hola from "./Hola";
import Nombre from "./Nombre";

const ChildrenContenedor = () => {
  const nombre = "Nico";

  return (
    <Hola>
      <Nombre name={nombre} />
    </Hola>
  );
};

export default ChildrenContenedor;
