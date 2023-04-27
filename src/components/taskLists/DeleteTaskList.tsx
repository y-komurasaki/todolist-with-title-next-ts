import { useDispatch } from "react-redux";
import { deleteTaskList } from "@/features/Tasks";

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
    <button className="listDeleteButton" onClick={deleteTaskListClick}>
      削除
    </button>
  );
};

export default DeleteTaskList;
