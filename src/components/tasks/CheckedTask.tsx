import { checkedTask } from "@/features/Tasks";
import { useDispatch } from "react-redux";
import { ListWithTasks, Task } from "./DisplayTasks";

interface CheckedTaskProps {
  list: ListWithTasks;
  task: Task;
}

const CheckedTask: React.FC<CheckedTaskProps> = ({ list, task }) => {
  const dispatch = useDispatch();

  const handleTaskCheckedChange = (
    currentListId: string,
    currentTaskId: string,
    taskCompleted: boolean
  ) => {
    dispatch(
      checkedTask({
        listId: currentListId,
        taskId: currentTaskId,
        taskCompleted: taskCompleted,
      })
    );
  };

  return (
    <input
      type="checkbox"
      defaultChecked={task.completed}
      onChange={(e) =>
        handleTaskCheckedChange(list.listId, task.id, e.target.checked)
      }
    />
  );
};

export default CheckedTask;
