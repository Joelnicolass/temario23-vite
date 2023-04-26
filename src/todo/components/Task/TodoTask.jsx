import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoTask = ({ task, toggleTask, removeTask, styleTask }) => {
  const { incrementCompletedTasks, decrementCompletedTasks } =
    useContext(TodoContext);

  return (
    <div style={styleTask}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          toggleTask(task.id);
          e.target.checked
            ? incrementCompletedTasks()
            : decrementCompletedTasks();
        }}
      />
      <h3>{task.title}</h3>
      <button
        onClick={(e) => {
          removeTask(task.id);
          task.completed && decrementCompletedTasks();
        }}
      >
        x
      </button>
    </div>
  );
};

export default TodoTask;
