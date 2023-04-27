import React from "react";
import AddTask from "./AddTask";
import EditTask from "./EditTask";

export interface Task {
  id: string;
  text: string;
}

export interface ListWithTasks {
  listId: string;
  title: string;
  contents: Task[];
}

interface DisplayTasksProps {
  list: ListWithTasks;
}

const DisplayTasks: React.FC<DisplayTasksProps> = ({ list }) => {
  return (
    <div className="displayTask">
      <AddTask list={list} />
      {list.contents.map((task) => (
        <div key={task.id} className="task">
          <EditTask list={list} task={task} />
        </div>
      ))}
    </div>
  );
};

export default DisplayTasks;
