import React from "react";

interface Task {
  id: string;
  text: string;
}

interface ListWithTasks {
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
      {list.contents.map((task) => (
        <div key={task.id} className="task">
          {task.text}
        </div>
      ))}
    </div>
  );
};

export default DisplayTasks;
