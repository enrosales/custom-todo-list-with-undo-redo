import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalState'
import "./Task.css";

function Task({ task }) {
  const { deleteTodo, setCompleted } = useContext(GlobalContext)
  const taskCompleted = () => {
    return {
      fontSize: "20px",
      color: task.done ? "gray" : "black",
      textDecoration: task.done ? "line-through" : "none",
    };
  };

  const handleChange = (e, id) => {
   setCompleted(id)
  };

  return (
    <div style={taskCompleted()} className="task">
      {task.title} -{task.id}
      <input type="checkbox" onChange={() => handleChange(null, task.id)} checked={task.done} />
      <button onClick={() => deleteTodo(task.id)}>X</button>
    </div>
  );
}
export default Task;