import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import todoReducer from "../features/TodoApp/todoSlice";
import contentReducer from "../features/Content/contentSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    content: contentReducer,
  },
});
