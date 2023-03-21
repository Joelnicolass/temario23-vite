import React from "react";

/* 
  Crear un componente que muestre un nombre y un boton que diga "cambiar nombre".

  Al hacer click en el boton, el nombre debe cambiar.
*/

const EjercicioEstados1 = () => {
  const nombre = "-nombre-";

  const cambiarNombre = () => {};

  return (
    <div>
      <h1>{nombre}</h1>
      <button>Cambiar Nombre</button>
    </div>
  );
};

export default EjercicioEstados1;
