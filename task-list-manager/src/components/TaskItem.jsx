import React from "react";
import useTaskContext from "../context/useTaskContext";
import "./TaskItem.css";
const TaskItem = ({ task }) => {
  const { deleteTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="item-container">
      <li>
        <div className="task-text">{task.task}</div>
        <div className="task-date">{task.date}</div>
        <button className="task-delete-button" onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default TaskItem;
