import { useSelector } from "react-redux";
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
    <div className="taskLists">
      {tasks.taskLists.map((list) => (
        <div key={list.listId} className="taskList">
          <div className="taskListTitles">
            <EditTaskList list={list} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskLists;
