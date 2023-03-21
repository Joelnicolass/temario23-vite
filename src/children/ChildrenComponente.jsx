import React from "react";
import Componente1 from "./Componente1";
import Componente2 from "./Componente2";

const ChildrenComponente = () => {
  return (
    <Componente1>
      <Componente2 />
    </Componente1>
  );
};

export default ChildrenComponente;
