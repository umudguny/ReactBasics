import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import todoReducer from "../features/TodoApp/todoSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
