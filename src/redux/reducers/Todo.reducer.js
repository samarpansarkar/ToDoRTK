import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "../../utils/apiManager";

export const getAllTODO = createAsyncThunk(
  "getAllTODO",
  async (_, { rejectWithValue }) => {
    try {
      const response = await ApiManager.get("/todo");
      console.log(response);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const createTodo = createAsyncThunk(
  "createTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const response = await ApiManager.post("/todo", todo);
      console.log(response);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiManager.delete(`/todo/${id}`);
      const data = response.data;
      console.log(data);
      return id;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const todoDetails = createAsyncThunk(
  "todoDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await ApiManager.get(`/todo/${id}`);
      // console.log(response);
      // if (!response.ok) return rejectWithValue("Wrong Response");
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "updateTodo",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await ApiManager.put(`/todo/${id}`, formData);
      const data = await response.data;
      console.log("post", data);

      return data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error?.message || "Failed to update todo");
    }
  }
);
