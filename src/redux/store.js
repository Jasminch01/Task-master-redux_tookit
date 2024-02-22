import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";

const store = configureStore({
  reducer: {
    taskReducer,
    
  },
});

export default store;
