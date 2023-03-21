import React, { useState } from "react";

/* 

    El componente EjercicioEstados2 debe mostrar un numero y tres botones:

    - Sumar
    - Restar
    - Resetear

    Al hacer click en los botones, el numero debe cambiar segun corresponda.

    El numero inicial debe ser 0.

*/

const EjercicioEstados2 = () => {
  const [] = useState();

  const sumar = () => {};
  const restar = () => {};
  const resetear = () => {};

  return (
    <div>
      <h1>valor</h1>
      <button onClick={sumar}>Sumar</button>
      <button>Restar</button>
      <button>Resetear</button>
    </div>
  );
};

export default EjercicioEstados2;
