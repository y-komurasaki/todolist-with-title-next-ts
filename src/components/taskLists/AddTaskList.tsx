import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTaskList } from "@/features/Tasks";
import { BsFillPlusSquareFill } from "react-icons/bs";

const AddTaskList = () => {
  const [newListTitleText, setNewListTitleText] = useState("");
  const dispatch = useDispatch();

  const addTaskListClick = () => {
    if (newListTitleText === "" || newListTitleText.match(/[ｦ-ﾟ０-９]+/))
      return;
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
        className="text-4xl h-0 bg-transparent hover:text-green-500"
        onClick={addTaskListClick}
      >
        <BsFillPlusSquareFill className="hover:shadow-md transform hover:translate-y-1 translate-x-1 transition duration-200" />
      </button>
    </div>
  );
};

export default AddTaskList;
