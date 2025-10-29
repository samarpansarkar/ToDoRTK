import { createSlice, nanoid } from "@reduxjs/toolkit";
import { getAllTODO, todoDetails, updateTodo } from "../reducers/Todo.reducer";

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
    deleteTodo: () => {},
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
  },
});

export const { createTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
