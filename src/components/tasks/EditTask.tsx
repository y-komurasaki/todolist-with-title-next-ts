import ErrorMessageModal from "@/modals/ErrorMessageModal";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTask, TasksState } from "../../features/Tasks";
import { Task, ListWithTasks } from "./DisplayTasks";

interface EditTaskProps {
  list: ListWithTasks;
  task: Task;
}

const EditTask: React.FC<EditTaskProps> = ({ list, task }) => {
  const [editInputTaskText, setEditInputTaskText] = useState<string>("");
  const [editTaskId, setEditTaskId] = useState<string | null>(null);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state: TasksState) => state.tasks);

  const editTaskClick = (currentTaskId: string, currentTaskText: string) => {
    setEditTaskId(currentTaskId);
    setEditInputTaskText(currentTaskText);
  };

  const editTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditInputTaskText(e.target.value);
  };

  const editDataSubmit = (
    e: FormEvent<HTMLFormElement>,
    currentListId: string,
    currentTaskId: string
  ) => {
    e.preventDefault();
    if (editInputTaskText.match(/[ｦ-ﾟ０-９]+/)) {
      setErrorMessage("半角カナ又は全角英数字が含まれています。");
      setErrorModalIsOpen(true);
      return;
    }

    const isExistingTask = tasks.taskLists.some((taskList) =>
      taskList.contents.some((task) => task.text === editInputTaskText)
    );

    if (isExistingTask) {
      setErrorMessage("同じタスクが既に存在します。");
      setErrorModalIsOpen(true);
      return;
    }

    dispatch(
      editTask({
        listId: currentListId,
        taskId: currentTaskId,
        editText: editInputTaskText,
      })
    );
    if (editInputTaskText === "") {
      setEditInputTaskText("");
      return;
    }

    setEditInputTaskText("");
    setEditTaskId(null);
  };

  return (
    <>
      <div
        onClick={() => editTaskClick(task.id, task.text)}
        className="taskContents"
      >
        {editTaskId === task.id ? (
          <form onSubmit={(e) => editDataSubmit(e, list.listId, task.id)}>
            <input
              type="text"
              onChange={editTextChange}
              defaultValue={task.text}
            />
          </form>
        ) : (
          <h3> {task.text}</h3>
        )}
      </div>
      <ErrorMessageModal
        modalIsOpen={errorModalIsOpen}
        closeModal={() => {
          setErrorModalIsOpen(false);
          setErrorMessage("");
        }}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default EditTask;
