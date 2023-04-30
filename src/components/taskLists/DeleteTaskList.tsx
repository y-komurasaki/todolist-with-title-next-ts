import { useDispatch } from "react-redux";
import { deleteTaskList } from "@/features/Tasks";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteConfirmationModal from "@/modals/DeleteConfirmationModal";

interface ListProps {
  listId: string;
  title: string;
}

interface DeleteTaskListProps {
  list: ListProps;
}

const DeleteTaskList = ({ list }: DeleteTaskListProps): JSX.Element => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDeleteTaskListClick = () => {
    setModalIsOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(deleteTaskList({ listId: list.listId }));
    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button
        className="text-2xl hover:text-red-500"
        onClick={handleDeleteTaskListClick}
      >
        <FaTrashAlt className="hover:translate-y-1 translate-x-1 transition duration-200" />
      </button>
      <DeleteConfirmationModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleDeleteConfirmation={handleDeleteConfirmation}
      />
    </>
  );
};

export default DeleteTaskList;
