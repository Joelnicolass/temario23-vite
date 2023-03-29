import React, { useEffect, useState } from "react";

// CREA UN COMPONENTE QUE MUESTRE LA POSICIÓN DEL MOUSE EN PANTALLA
// UTILIZA USEEFFECT PARA CONTROLAR EL EVENTO QUE SE ENCARGA DE CONTROLAR EL MOVIMIENTO DEL MOUSE
// * window.addEventListener("mousemove", handleMouseMove);
// RECUERDA QUE PARA ELIMINAR UN EVENTO DEBE UTILIZARSE EL MÉTODO REMOVEEVENTLISTENER

const EjercicioEfectos2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;

    setPosition({ x, y });
  };

  return (
    <div>
      <h3>{`Posición del mouse: `}</h3>
    </div>
  );
};

export default EjercicioEfectos2;
