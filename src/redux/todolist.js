import { createSlice } from "@reduxjs/toolkit";

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: {
    dataList: [
      {
        id: 1,
        title: "Learning English",
        status: "active"
      },
      {
        id: 2,
        title: "Go to gym",
        status: "done"
      }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      state.dataList = [...state.dataList,
      {
        id: Math.floor(Math.random() * 100000),
        title: action.payload,
        status: "active"
      }
      ]
    },
    changeStatus: (state, action) => {
      const index = state.dataList.findIndex(item => {
        return item.id === action.payload;
      });
      if (index !== -1) {
        state.dataList[index].status === "active" ? state.dataList[index].status = "done" : state.dataList[index].status = "active";
      }
    },
    deleteItem: (state, action) => {
      state.dataList = state.dataList.filter(item => item.id !== action.payload)
    },
    clearCompleted: (state) => {
      state.dataList = state.dataList.filter(item => item.status !== "done")
    }
  }
});

export const { addItem, changeStatus, deleteItem, clearCompleted } = toDoListSlice.actions;
export default toDoListSlice.reducer;