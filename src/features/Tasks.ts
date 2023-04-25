import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  completed?: boolean;
}

interface TaskList {
  title: string;
  listId: number;
  contents: Task[];
}

interface TasksState {
  taskLists: TaskList[];
}

const initialState: TasksState = {
  taskLists: [
    {
      title: "test",
      listId: 0,
      contents: [{ id: 0, text: "test", completed: undefined }],
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;
