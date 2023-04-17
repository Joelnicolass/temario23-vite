import React, { useState } from "react";

// formularios controlados - tiene asociado un estado

const FormulariosControlados = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validaciones
    // enviar datos al servidor
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
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <input type="submit" value="Iniciar Sesion" />
      </form>
    </div>
  );
};

export default FormulariosControlados;
