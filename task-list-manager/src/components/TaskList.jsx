import React from "react";
import TaskItem from "./TaskItem";
import useTaskContext from "../context/useTaskContext";

const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <div className="list-container">
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
