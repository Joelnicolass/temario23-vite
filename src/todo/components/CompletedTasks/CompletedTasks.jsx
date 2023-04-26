import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const CompletedTasks = () => {
  const { completedTasks } = useContext(TodoContext);

  return <h5>Tareas completadas: {completedTasks}</h5>;
};

export default CompletedTasks;
