import React, { useRef } from "react";

const getFormFields = (e) => Object.fromEntries(new window.FormData(e.target));

const FormulariosNoControlados = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, apellido } = getFormFields(e);

    // nombre tiene mas de 10 caracteres
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input type="text" name="nombre" />
        <input type="text" name="apellido" />

        <input type="submit" value="Iniciar Sesion" />
      </form>
    </div>
  );
};

export default FormulariosNoControlados;
