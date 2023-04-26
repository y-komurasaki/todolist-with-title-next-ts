import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  text: string;
  completed?: boolean;
}

interface TaskList {
  title: string;
  listId: string;
  contents: Task[];
}

interface TasksState {
  taskLists: TaskList[];
}

const initialState: TasksState = {
  taskLists: [
    {
      title: "test",
      listId: "0",
      contents: [{ id: "0", text: "test", completed: undefined }],
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskList: (
      state,
      action: PayloadAction<{ title: string; listId: string }>
    ) => {
      const { title, listId } = action.payload;
      state.taskLists.push({
        title: title,
        listId: listId,
        contents: [],
      });
    },
    editTaskList: (
      state,
      action: PayloadAction<{ listId: string; editListTitleText: string }>
    ) => {
      const { listId, editListTitleText } = action.payload;
      state.taskLists = state.taskLists.map((taskList) =>
        taskList.listId === listId
          ? { ...taskList, title: editListTitleText }
          : taskList
      );
    },
  },
});

export const { addTaskList, editTaskList } = tasksSlice.actions;
export default tasksSlice.reducer;