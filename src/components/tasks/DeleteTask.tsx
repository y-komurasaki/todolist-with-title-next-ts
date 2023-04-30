import { useDispatch } from "react-redux";
import { deleteTask } from "@/features/Tasks";
import { ListWithTasks, Task } from "./DisplayTasks";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import DeleteConfirmationModal from "@/modals/DeleteConfirmationModal";

interface DeleteTaskProps {
  list: ListWithTasks;
  task: Task;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ list, task }) => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDeleteTaskClick = () => {
    setModalIsOpen(true);
  };

  const handleDeleteConfirmation = () => {
    dispatch(deleteTask({ listId: list.listId, taskId: task.id }));
    setModalIsOpen(false);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button className="hover:text-red-500" onClick={handleDeleteTaskClick}>
        <FaTrashAlt className="hover:translate-y-1 translate-x-1 transition duration-200" />
      </button>
      <DeleteConfirmationModal
        modalIsOpen={modalIsOpen}
        closeModal={handleCloseModal}
        handleDeleteConfirmation={handleDeleteConfirmation}
      />
    </>
  );
};

export default DeleteTask;
