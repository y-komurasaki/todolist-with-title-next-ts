import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTaskList } from "@/features/Tasks";
import { BsFillPlusSquareFill } from "react-icons/bs";
import ErrorMessageModal from "@/modals/ErrorMessageModal";

const AddTaskList = () => {
  const [newListTitleText, setNewListTitleText] = useState("");
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const taskLists = useSelector((state) => state.tasks.taskLists);

  const addTaskListClick = () => {
    if (newListTitleText === "") {
      setErrorMessage("リストタイトルが入力されていません。");
      setErrorModalIsOpen(true);
      return;
    }

    if (newListTitleText.match(/[ｦ-ﾟ０-９]+/)) {
      setErrorMessage("半角カナ又は全角英数字が含まれています。");
      setErrorModalIsOpen(true);
      return;
    }

    const duplicateTaskList = taskLists.some(
      (list) => list.title === newListTitleText
    );

    if (duplicateTaskList) {
      setErrorMessage("同じタイトルのタスクリストが既に存在します。");
      setErrorModalIsOpen(true);
      return;
    }

    const listId = uuidv4();
    dispatch(
      addTaskList({
        title: newListTitleText,
        listId: listId,
      })
    );
    setNewListTitleText("");
  };

  return (
    <div className="flex justify-center m-5 ">
      <input
        type="text"
        placeholder="タイトルを入力"
        onChange={(e) => setNewListTitleText(e.target.value)}
        value={newListTitleText}
        className="text-2xl text-black-500 font-bold text-center mb-5 border border-black "
      />

      <button
        className="text-4xl h-0  hover:text-green-500"
        onClick={addTaskListClick}
      >
        <BsFillPlusSquareFill className="hover:translate-y-1 translate-x-1 transition duration-200" />
      </button>

      <ErrorMessageModal
        modalIsOpen={errorModalIsOpen}
        closeModal={() => {
          setErrorModalIsOpen(false);
          setErrorMessage("");
        }}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default AddTaskList;
