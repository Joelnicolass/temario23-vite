import React, { useState } from "react";

// formularios controlados - tiene asociado un estado

// formularios no controlados

const Formularios = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // validaciones de los campos

    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log("render");

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Formularios;
