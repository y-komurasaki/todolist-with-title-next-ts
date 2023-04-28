import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask, TasksState } from "../../features/Tasks";

interface Task {
  id: string;
  text: string;
}

interface ListWithTasks {
  listId: string;
  title: string;
  contents: Task[];
}

interface AddTaskProps {
  list: ListWithTasks;
}

interface TaskText {
  [key: string]: string;
}

const AddTask: React.FC<AddTaskProps> = ({ list }) => {
  const tasks = useSelector((state: TasksState) => state.tasks);
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState<TaskText>({});

  const addTaskClick = () => {
    if (
      newTaskText[list.listId] === "" ||
      newTaskText[list.listId].match(/[ｦ-ﾟ０-９]+/)
    )
      return;

    const isExistingTask = tasks.taskLists.some((list: ListWithTasks) =>
      list.contents.some((task: Task) => task.text === newTaskText[list.listId])
    );

    if (isExistingTask) {
      return;
    }

    const taskId = uuidv4();
    dispatch(
      addTask({
        listId: list.listId,
        taskId: taskId,
        newTaskText: newTaskText[list.listId],
      })
    );

    setNewTaskText({
      ...newTaskText,
      [list.listId]: "",
    });
  };

  return (
    <div className="addTodoContents">
      <input
        type="text"
        placeholder="Todoを入力"
        onChange={(e) =>
          setNewTaskText({
            ...newTaskText,
            [list.listId]: e.target.value,
          })
        }
        value={newTaskText[list.listId] || ""}
        className="inputTodo"
      />
      <button className="addTodoButton" onClick={addTaskClick}>
        追加
      </button>
    </div>
  );
};

export default AddTask;
