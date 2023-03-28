import React, { useEffect, useState } from "react";

/* 


  montaje - 1 vez
  * useEffect(() => {}, [])

  actualizacion - cada vez que cambia una dependencia
  * useEffect(() => {}, [deps]) 

  desmontaje 
  * useEffect(() => { return () => {} }, [])



*/

const Efectos = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    //console.log("SE EJECUTA CUANDO SE MONTA"); // LLAMADA A API
  }, []); // SE EJECUTA SOLO LA PRIMERA VEZ - MONTAJE

  useEffect(() => {
    if (contador === 0) return;

    console.log("CONTADOR CAMBIO");
  }, [contador]); // SIEMPRE SE EJECUTA CUANDO EL COMPONENTE SE MONTA - CUANDO LA DEPENDENCIA CAMBIA - ACTUALIZACION

  useEffect(() => {
    //CLEAN UP
    return () => {
      //console.log("SE EJECUTA CUANDO SE DESMONTA");
    };
  }, []);

  return (
    <div>
      {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default Efectos;
