import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./sclices/Todo.slice";

const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  devTools: true,
});

export default Store;
