// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});