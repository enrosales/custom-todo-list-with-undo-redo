import React from "react";
import Task from "./Task";

function TaskList({ tasks}) {
  return (
      <div>
          { tasks.map(task => {
              return <Task task={task} key={task.id} ></Task>
          }) }
      </div>
  )
}
export default TaskList;