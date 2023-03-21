import React, { useState } from "react";

// los estados son variables que se pueden cambiar, y que hacen que el componente se vuelva a renderizar

// useState es una función que nos permite crear estados

// useState devuelve un array con dos elementos: el valor del estado y una función que nos permite cambiar ese valor

// useState recibe como parámetro el valor inicial del estado

const Estados = () => {
  // const [estado, cambiarEstado] = useState(valorInicial)

  const [valor, cambiarValor] = useState("Nico");

  const incrementar = () => {
    cambiarValor(valor + 1);
  };

  return (
    <div>
      <h1>Valor: {valor}</h1>
      <button onClick={incrementar}>+</button>
    </div>
  );
};

export default Estados;

/* 
const useState = (valorInicial) => {
  let valor = valorInicial;

  const cambiarValor = (nuevoValor) => {};

  return [valor, cambiarValor];
};
 */
