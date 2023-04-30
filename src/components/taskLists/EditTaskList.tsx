import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskList, editTaskList } from "@/features/Tasks";
import ErrorMessageModal from "@/modals/ErrorMessageModal";
import DeleteConfirmationModal from "@/modals/DeleteConfirmationModal";

interface ListProps {
  listId: string;
  title: string;
}

interface EditTaskListProps {
  list: ListProps;
}

const EditTaskList = ({ list }: EditTaskListProps): JSX.Element => {
  const [editListTitleText, setEditListTitleText] = useState<string>("");
  const [editListId, setEditListId] = useState<string | null>(null);
  const [errorModalIsOpen, setErrorModalIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const tasks = useSelector(
    (state: { tasks: { taskLists: ListProps[] } }) => state.tasks
  );

  const handleEditTitleClick = (): void => {
    setEditListId(list.listId);
    setEditListTitleText(list.title);
  };

  const handleEditTitleTextChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEditListTitleText(e.target.value);
  };

  const handleEditTitleDataSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    if (editListTitleText.match(/[ｦ-ﾟ０-９]+/)) {
      setErrorMessage("半角カナ又は全角英数字が含まれています。");
      setErrorModalIsOpen(true);
      return;
    }

    const isExistingList = tasks.taskLists.some(
      (listItem) =>
        listItem.title === editListTitleText && listItem.listId !== list.listId
    );

    if (isExistingList) {
      setErrorMessage("同じタイトルのタスクリストが既に存在します。");
      setErrorModalIsOpen(true);
      return;
    }

    if (editListTitleText === "") {
      setDeleteModalIsOpen(true);
      return;
    }

    dispatch(
      editTaskList({
        listId: list.listId,
        editListTitleText: editListTitleText,
      })
    );

    setEditListTitleText("");
    setEditListId(null);
  };

  const handleDeleteConfirmation = () => {
    dispatch(deleteTaskList({ listId: list.listId }));
    setDeleteModalIsOpen(false);
  };

  return (
    <>
      <div
        className="flex justify-center text-2xl p-3 mb-1 text-center font-bold tracking-wider"
        onClick={handleEditTitleClick}
      >
        {editListId === list.listId ? (
          <form onSubmit={handleEditTitleDataSubmit}>
            <input
              type="text"
              id="edit-list-title"
              onChange={handleEditTitleTextChange}
              value={editListTitleText}
            />
          </form>
        ) : (
          <p className="mr5">{list.title}</p>
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
      <DeleteConfirmationModal
        modalIsOpen={deleteModalIsOpen}
        closeModal={() => setDeleteModalIsOpen(false)}
        handleDeleteConfirmation={handleDeleteConfirmation}
      />
    </>
  );
};
export default EditTaskList;
