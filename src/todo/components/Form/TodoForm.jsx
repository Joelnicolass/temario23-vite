import React from "react";

const TodoForm = ({ form, styleForm, handleSubmit, handleChange }) => {
  return (
    <form style={styleForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={form.title}
        required
        placeholder="Título de la tarea"
      />
      <button>add task</button>
    </form>
  );
};

export default TodoForm;
