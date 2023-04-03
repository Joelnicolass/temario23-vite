import React, { useState } from "react";

const EstadosRepaso2 = () => {
  const [nombre, setNombre] = useState("Juan");

  const cambiarNombre = () => {
    setNombre("Nico");
    console.log(nombre);
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
};

export default EstadosRepaso2;
