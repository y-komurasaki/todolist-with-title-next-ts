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

export interface TasksState {
  taskLists: TaskList[];
}

const initialState: TasksState = {
  taskLists: [
    {
      title: "test",
      listId: "0",
      contents: [{ id: "0", text: "test", completed: false }],
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
    deleteTaskList: (state, action: PayloadAction<{ listId: string }>) => {
      const { listId } = action.payload;
      state.taskLists = state.taskLists.filter(
        (taskList) => taskList.listId !== listId
      );
    },
    addTask: (
      state,
      action: PayloadAction<{
        listId: string;
        taskId: string;
        newTaskText: string;
      }>
    ) => {
      const { listId, taskId, newTaskText } = action.payload;
      state.taskLists = state.taskLists.map((taskList) => {
        if (taskList.listId === listId) {
          return {
            ...taskList,
            contents: [...taskList.contents, { id: taskId, text: newTaskText }],
          };
        }
        return taskList;
      });
    },

    editTask: (
      state,
      action: PayloadAction<{
        listId: string;
        taskId: string;
        editText: string;
      }>
    ) => {
      const { listId, taskId, editText } = action.payload;
      state.taskLists = state.taskLists.map((taskList) => {
        if (taskList.listId === listId) {
          const editContents = taskList.contents.map((task) =>
            task.id === taskId ? { ...task, text: editText } : task
          );
          return { ...taskList, contents: editContents };
        }
        return taskList;
      });
    },
    checkedTask: (
      state,
      action: PayloadAction<{
        listId: string;
        taskId: string;
        taskCompleted: boolean;
      }>
    ) => {
      const { listId, taskId, taskCompleted } = action.payload;

      state.taskLists = state.taskLists.map((taskList) => {
        if (taskList.listId === listId) {
          taskList.contents = taskList.contents.map((task) =>
            task.id === taskId ? { ...task, completed: !taskCompleted } : task
          );
        }
        return taskList;
      });
    },

    deleteTask: (
      state,
      action: PayloadAction<{
        listId: string;
        taskId: string;
      }>
    ) => {
      const { listId, taskId } = action.payload;
      state.taskLists = state.taskLists.map((taskList) => {
        if (taskList.listId === listId) {
          const deleteContents = taskList.contents.filter(
            (task) => task.id !== taskId
          );
          return { ...taskList, contents: deleteContents };
        }
        return taskList;
      });
    },
  },
});

export const {
  addTaskList,
  editTaskList,
  deleteTaskList,
  addTask,
  editTask,
  checkedTask,
  deleteTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
