import React, { useState } from "react";

const EstadosRepaso = () => {
  const [nombre, setNombre] = useState("Nico"); //hook

  const cambiarNombre = (name) => {
    setNombre(name);
  };

  return (
    <div>
      <h1>{nombre}</h1>
      <button
        onClick={(e) => {
          cambiarNombre("Jose");
        }}
      >
        Cambiar nombre
      </button>
    </div>
  );
};

export default EstadosRepaso;
