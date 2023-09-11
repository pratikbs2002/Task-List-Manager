const initialState = {
  tasks: [],
};

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const SET_TASKS = "SET_TASKS";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((TASK) => TASK.id !== action.payload),
      };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export { initialState, ADD_TASK, DELETE_TASK, SET_TASKS, reducer };
