import React from "react";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish React Tutorials", Completed: true },
    { id: 2, name: "Finish React Tutorials 1", Completed: false },
    { id: 3, name: "Finish React Tutorials 2", Completed: false },
    { id: 4, name: "Finish React Tutorials 3", Completed: false },
  ]);
  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.name} - {task.Completed ? "Completed" : "Pending"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
