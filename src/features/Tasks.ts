import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    addTaskList: (
      state,
      action: PayloadAction<{ newTitleText: string; listId: number }>
    ) => {
      const { newTitleText, listId } = action.payload;
      state.taskLists.push({
        title: newTitleText,
        listId,
        contents: [],
      });
    },
  },
});

export const { addTaskList } = tasksSlice.actions;
export default tasksSlice.reducer;
