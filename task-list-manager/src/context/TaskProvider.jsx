import { useEffect, useReducer } from "react";
import TaskContext from "./TaskContext";
import {
  initialState,
  ADD_TASK,
  DELETE_TASK,
  SET_TASKS,
  reducer,
} from "./reducer";
const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };
  const setTasks = (tasks) => {
    dispatch({ type: SET_TASKS, payload: tasks });
  };

  // useEffect(() => {
  //     fetch('/api/tasks')
  //         .then((response) => response.json())
  //         .then((data) => setTasks(data))
  //         .catch((error) => console.error(error));
  // }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
