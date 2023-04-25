import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useSelector } from "react-redux";

interface Task {
  listId: number;
  title: string;
}

interface TaskList {
  taskLists: Task[];
}

export default function Home(): JSX.Element {
  const tasks = useSelector((state: { tasks: TaskList }) => state.tasks);
  return (
    <div className="taskLists">
      {tasks.taskLists.map((list) => (
        <div key={list.listId} className="taskList">
          {list.title}
        </div>
      ))}
    </div>
  );
}
