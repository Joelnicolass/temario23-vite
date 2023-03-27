import React from "react";
import styles from "./Estilos.module.css";

const Estilos = () => {
  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        Estilos
      </div>
    </div>
  );
};

export default Estilos;
