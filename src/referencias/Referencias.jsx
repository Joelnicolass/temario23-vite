import React, { useRef, useState } from "react";

const Referencias = () => {
  const [contadorEstado, setContadorEstado] = useState(0);
  const contadorRef = useRef(0);
  let contadorVariableLocal = 0;

  const incrementarVariableLocal = (e) => {
    contadorVariableLocal = contadorVariableLocal + 1;
    console.log(contadorVariableLocal);
  };

  const incrementarEstado = (e) => {
    setContadorEstado(contadorEstado + 1);
    console.log(contadorEstado);
  };

  const incrementarReferencia = (e) => {
    contadorRef.current = contadorRef.current + 1;
    console.log(contadorRef.current);
  };

  return (
    <div>
      <div>
        <h2>VARIABLE LOCAL: {contadorVariableLocal}</h2>
        <button onClick={incrementarVariableLocal}>+</button>
      </div>
      <div>
        <h2>ESTADO: {contadorEstado}</h2>
        <button onClick={incrementarEstado}>+</button>
      </div>
      <div>
        <h2>REFERENCIA: {contadorRef.current}</h2>
        <button onClick={incrementarReferencia}>+</button>
      </div>
    </div>
  );
};

export default Referencias;
