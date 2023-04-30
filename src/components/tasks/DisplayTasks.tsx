import React from "react";
import AddTask from "./AddTask";
import CheckedTask from "./CheckedTask";
import DeleteTask from "./DeleteTask";
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
        <div
          key={task.id}
          className="flex justify-between m-5 p-5 bg-gray-100 shadow-md"
        >
          <CheckedTask list={list} task={task} />
          <EditTask list={list} task={task} />
          <DeleteTask list={list} task={task} />
        </div>
      ))}
    </div>
  );
};

export default DisplayTasks;
