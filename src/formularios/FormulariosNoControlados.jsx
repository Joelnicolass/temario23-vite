import React from "react";

// useRef

export const getFormFields = (e) => {
  const fields = Object.fromEntries(new window.FormData(e.target));

  return fields;
};

const FormulariosNoControlados = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = getFormFields(e);

    console.log(email, password);
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
        <input type="email" name="email" />

        <input type="password" name="password" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormulariosNoControlados;
