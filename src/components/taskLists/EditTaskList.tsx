import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTaskList } from "@/features/Tasks";

interface List {
  listId: string;
  title: string;
}

interface Props {
  list: List;
}

const EditTaskList = ({ list }: Props): JSX.Element => {
  const [editListTitleText, setEditListTitleText] = useState<string>("");
  const [editListId, setEditListId] = useState<string | null>(null);
  const dispatch = useDispatch();
  const tasks = useSelector(
    (state: { tasks: { taskLists: List[] } }) => state.tasks
  );

  const editTitleClick = (): void => {
    setEditListId(list.listId);
    setEditListTitleText(list.title);
  };

  const editTitleTextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEditListTitleText(e.target.value);
  };

  const editTitleDataSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (editListTitleText.match(/[ｦ-ﾟ０-９]+/)) {
      return;
    }

    const isExistingList = tasks.taskLists.some(
      (listItem) =>
        listItem.title === editListTitleText && listItem.listId !== list.listId
    );

    if (isExistingList) {
      return;
    }

    dispatch(
      editTaskList({
        listId: list.listId,
        editListTitleText: editListTitleText,
      })
    );

    if (editListTitleText === "") {
      return;
    }

    setEditListTitleText("");
    setEditListId(null);
  };

  return (
    <div
      className="flex justify-center text-2xl p-3 mb-1 text-center font-bold tracking-wider"
      onClick={editTitleClick}
    >
      {editListId === list.listId ? (
        <form onSubmit={editTitleDataSubmit}>
          <input
            type="text"
            id="edit-list-title"
            onChange={editTitleTextChange}
            value={editListTitleText}
          />
        </form>
      ) : (
        <p className="mr-5">{list.title}</p>
      )}
    </div>
  );
};

export default EditTaskList;
