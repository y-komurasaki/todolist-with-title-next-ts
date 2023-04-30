import { useDispatch } from "react-redux";
import { deleteTaskList } from "@/features/Tasks";
import { FaTrashAlt } from "react-icons/fa";

interface List {
  listId: string;
  title: string;
}

interface Props {
  list: List;
}

const DeleteTaskList = ({ list }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const deleteTaskListClick = () => {
    dispatch(deleteTaskList({ listId: list.listId }));
  };

  return (
    <button
      className="text-2xl bg-transparent hover:text-red-500"
      onClick={deleteTaskListClick}
    >
      <FaTrashAlt className=" hover:shadow-md transform hover:translate-y-1 translate-x-1 transition duration-200" />
    </button>
  );
};

export default DeleteTaskList;
