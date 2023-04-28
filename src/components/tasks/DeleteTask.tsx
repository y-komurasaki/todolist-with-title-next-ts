import { useDispatch } from "react-redux";
import { deleteTask } from "@/features/Tasks";
import { ListWithTasks, Task } from "./DisplayTasks";

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
      削除
    </button>
  );
};

export default DeleteTask;
