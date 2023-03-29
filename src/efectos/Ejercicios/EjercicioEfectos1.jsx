import React, { useState, useEffect } from "react";

//Crea un componente que muestre un contador.
// Utiliza el hook useEffect para cambiar el título de la página cada vez que el contador cambie.
// El titulo de la página debe ser "Contador: <valor del contador>".

const changeTitlePage = () => {
  document.title = "";
};

const EjercicioEfectos1 = () => {
  return (
    <div>
      <h3>{}</h3>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default EjercicioEfectos1;
