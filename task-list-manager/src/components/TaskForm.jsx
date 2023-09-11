import React, { useState } from "react";
import useTaskContext from "../context/useTaskContext";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm() {
  const [newTask, setNewTask] = useState("");
  const { addTask } = useTaskContext();

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") return;

    const taskId = uuidv4();
    const currentDate = new Date();

    console.log(`${taskId}: ${newTask}`);
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    const dateTime = `${date} ${time}`;
    addTask({
      id: taskId,
      task: newTask,
      date: dateTime,
    });

    setNewTask("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
