import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
  reducer: {
    taskReducer,
    userSlice
    
  },
});

export default store;
