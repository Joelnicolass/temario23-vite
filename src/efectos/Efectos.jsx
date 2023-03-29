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
    console.log("Montaje");
  }, []); // SE EJECUTA UNA VEZ - MONTAJE

  useEffect(() => {
    if (contador === 0) return;
    console.log("Actualizacion");
  }, [contador]); // SIEMPRE SE EJECUTA LA PRIEMRA VEZ - SE EJECUTA CUANDO CAMBIA EL CONTADOR

  useEffect(() => {
    // CLEAN UP
    return () => {
      console.log("Desmontaje");
    };
  }, []); // SE EJECUTA CUANDO EL COMPONENTE SE DESMONTA

  return (
    <div>
      {contador}
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default Efectos;
