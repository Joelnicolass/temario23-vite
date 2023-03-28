import React from "react";
import styles from "./Estilos.module.css";

// ESTILOS EN LINEA
// ESTILOS POR MODULO

const Estilos = () => {
  return (
    <div className={styles.container}>
      <h1
        style={{
          backgroundColor: "blue",
          color: "white",
        }} // estilos en linea
      >
        Estilos
      </h1>
    </div>
  );
};

export default Estilos;
