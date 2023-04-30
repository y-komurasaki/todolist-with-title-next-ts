import { useSelector } from "react-redux";
import DisplayTasks from "../tasks/DisplayTasks";
import DeleteTaskList from "./DeleteTaskList";
import EditTaskList from "./EditTaskList";

interface List {
  listId: string;
  title: string;
}

interface TaskList {
  taskLists: List[];
}

const TaskLists = (): JSX.Element => {
  const tasks = useSelector((state: { tasks: TaskList }) => state.tasks);

  return (
    <div className="flex justify-center flex-wrap">
      {tasks.taskLists.map((list) => (
        <div key={list.listId} className=" p-5 bg-gray-100 shadow-md">
          <div className="flex justify-center">
            <EditTaskList list={list} />
            <DeleteTaskList list={list} />
          </div>
          <DisplayTasks list={list} />
        </div>
      ))}
    </div>
  );
};

export default TaskLists;
