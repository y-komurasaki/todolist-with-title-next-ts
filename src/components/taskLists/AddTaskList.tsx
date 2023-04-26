import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTaskList } from "@/features/Tasks";

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
    <div className="inputTitleContents">
      <input
        type="text"
        placeholder="タイトルを入力"
        onChange={(e) => setNewListTitleText(e.target.value)}
        value={newListTitleText}
        className="inputTitle"
      />
      <button className="listAddButton" onClick={addTaskListClick}>
        追加
      </button>
    </div>
  );
};

export default AddTaskList;