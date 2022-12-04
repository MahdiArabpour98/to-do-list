import { configureStore } from "@reduxjs/toolkit";
import toDoListReducer from "./todolist";

export default configureStore({
  reducer: {
    dataList: toDoListReducer
  }
})