import AddTaskList from "@/components/taskLists/AddTaskList";
import TaskLists from "@/components/taskLists/TaskLists";

export default function Home() {
  return (
    <div>
      <AddTaskList />
      <TaskLists />
    </div>
  );
}
