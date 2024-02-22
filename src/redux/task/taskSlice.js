import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.task.length === 0) {
        state.task.push({ id: 1, status: "panding", ...payload });
      } else {
        const lastElement = state.task.at(-1);
        state.task.push({
          id: lastElement.id + 1,
          status: "panding",
          ...payload,
        });
      }
    },
    removeTask: (state, {payload}) => {
      state.task.filter((item) => item.id !== payload);
    },
    updateStatus : (state, {payload}) => {
       const targetedTask =  state.task.find((item) => item.id === payload.id)
       targetedTask.status = payload.status;
    }
  },
});

export const { addTask, removeTask, updateStatus } = taskSlice.actions;

export default taskSlice.reducer;
