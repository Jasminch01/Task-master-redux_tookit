import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  task: [
    {
      id: 1,
      status : 'panding',
      name: 'dfasdf',
      discription: 'asdfsdaf',
      date: '2024-02-23',
      assignto: 'jesmin chakma',
      priority: 'low'
    }
  ],
  userSpicificTask: [],
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
    removeTask: (state, { payload }) => {
      state.task = state.task.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const targetedTask = state.task.find((item) => item.id === payload.id);
      targetedTask.status = payload.status;
    },
    userTasks: (state, { payload }) => {
      state.userSpicificTask = state.task.filter(
        (item) => item.assignto === payload
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, userTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
