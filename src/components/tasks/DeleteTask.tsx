import { useDispatch } from "react-redux";
import { deleteTask } from "@/features/Tasks";
import { ListWithTasks, Task } from "./DisplayTasks";
import { FaTrashAlt } from "react-icons/fa";

interface DeleteTaskProps {
  list: ListWithTasks;
  task: Task;
}

const DeleteTask: React.FC<DeleteTaskProps> = ({ list, task }) => {
  const dispatch = useDispatch();

  const deleteTaskClick = () => {
    dispatch(deleteTask({ listId: list.listId, taskId: task.id }));
  };

  return (
    <button
      className=" bg-transparent hover:text-red-500"
      onClick={deleteTaskClick}
    >
      <FaTrashAlt className=" hover:shadow-md transform hover:translate-y-1 translate-x-1 transition duration-200" />
    </button>
  );
};

export default DeleteTask;
