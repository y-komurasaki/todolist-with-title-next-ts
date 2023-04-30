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
    <button className="taskDeleteButton" onClick={deleteTaskClick}>
      <FaTrashAlt />
    </button>
  );
};

export default DeleteTask;
