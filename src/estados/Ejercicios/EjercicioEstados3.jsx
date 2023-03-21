import React, { useState } from "react";

/* 
    El componente EjercicioEstados3 debe mostrar un nombre y un boton que diga "cambiar nombre".
    
    *Los nombres seran dados a partir de un array de nombres.
    
    Al hacer click en el boton, el nombre debe cambiar por el siguiente nombre del array.

    El nombre inicial debe ser el primer nombre del array.

    El boton debe desaparecer cuando se llegue al ultimo nombre del array.

*/

const nombres = ["Juan", "Nico", "Pedro", "Maria", "Jose"];

const EjercicioEstados3 = () => {
  const [] = useState(nombres[0]);

  const cambiarNombre = () => {};

  return (
    <div>
      <h1>{}</h1>
      <button onClick={() => {}}>Cambiar Nombre</button>
    </div>
  );
};

export default EjercicioEstados3;
