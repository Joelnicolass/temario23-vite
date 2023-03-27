import React, { useEffect, useState } from "react";

const Efectos = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // peticion a una api
  }, []); // se ejecuta una sola vez, en la etapa de montaje

  useEffect(() => {}, [contador]); // se ejecuta en la etapa de montaje y cuando cambie la dependencia

  useEffect(() => {
    // clean up
    return () => {
      console.log("desmontaje");
    };
  }, []); // se ejecuta la primera vez y en la etapa de desmontaje

  return (
    <div>
      {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default Efectos;
