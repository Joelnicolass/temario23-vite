import React, { useState, useEffect } from "react";

const getUsers = () => {
  console.log("se obtienen usuarios de un servidor");
};

const EfectosRepaso = () => {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log("montaje");
  }, []); // se ejecuta una sola vez

  useEffect(() => {
    if (contador === 0) return;

    console.log("actualización");
  }, [contador2, contador]); // se ejecuta cada vez que contador2 cambie

  useEffect(() => {
    // clean up
    return () => {
      console.log("desmontaje");
    };
  }, []);

  return (
    <div>
      <h1>Efectos</h1>
      <h3>{contador}</h3>
      <h3>{contador2}</h3>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador2(contador2 + 1)}>Incrementar</button>
    </div>
  );
};

export default EfectosRepaso;
