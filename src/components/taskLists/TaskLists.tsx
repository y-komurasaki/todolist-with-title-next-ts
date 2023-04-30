import { useSelector } from "react-redux";
import DisplayTasks from "../tasks/DisplayTasks";
import DeleteTaskList from "./DeleteTaskList";
import EditTaskList from "./EditTaskList";

interface ListProps {
  listId: string;
  title: string;
}

interface TaskListState {
  taskLists: ListProps[];
}

interface RootState {
  tasks: TaskListState;
}

const TaskLists = (): JSX.Element => {
  const taskListState = useSelector((state: RootState) => state.tasks);

  const renderTaskLists = (): JSX.Element[] => {
    return taskListState.taskLists.map((list) => (
      <div key={list.listId} className="p-5 m-5 bg-gray-100 shadow-md">
        <div className="flex justify-center">
          <EditTaskList list={list} />
          <DeleteTaskList list={list} />
        </div>
        <DisplayTasks list={list} />
      </div>
    ));
  };

  return (
    <div className="flex justify-center flex-wrap">{renderTaskLists()}</div>
  );
};

export default TaskLists;
