import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  getAllTODO,
  todoDetails,
  updateTodo,
  deleteTodo,
} from "../reducers/Todo.reducer";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    todo: {},
    isLoading: false,
    isError: false,
    errorMsg: "",
  },
  reducers: {
    createTodo: (state, action) => {
      const newTodo = { id: nanoid(), ...action.payload };
      state.todos.push(newTodo);
    },
    deleteTodoLocal: (state, action) => {
      const delTodo = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== delTodo);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTODO.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(getAllTODO.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
      state.todos = action.payload;
    });
    builder.addCase(getAllTODO.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.error.message;
    });

    //! todoDetails
    builder.addCase(todoDetails.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(todoDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
      state.todo = action.payload;
    });
    builder.addCase(todoDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.error.message;
    });

    //! updateTodo
    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.errorMsg = "";
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.errorMsg = "";
      state.todo = action.payload;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.error.message;
    });

    //! delete todo
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMsg = action.payload || action.error.message;
    });
  },
});

export const { createTodo, deleteTodoLocal } = todoSlice.actions;
export default todoSlice.reducer;
