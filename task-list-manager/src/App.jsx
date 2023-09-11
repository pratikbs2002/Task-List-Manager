import React from "react";
import TaskProvider from "../../task-list-manager/src/context/TaskProvider";
import TaskForm from "../../task-list-manager/src/components/TaskForm";
import TaskList from "../../task-list-manager/src/components/TaskList";
import "./App.css";
export default function App() {
  return (
    <TaskProvider>
      <div className="main-container">
        <h1>Task List</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
}
