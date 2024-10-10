import { getTasks, reset, deleteTask } from "../features/tasks/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskItem from "./TaskItem";
import { useEffect } from "react";
import Spinner from "./Spinner";

const TaskList = () => {
  const { tasks, message, isLoading, isError } = useSelector(
    (state) => state.tasks
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) console.log(message);
    dispatch(getTasks());
    return () => dispatch(reset());
  }, [navigate, isError, message, dispatch]);

  const onDelete = (id, e) => {
    e.preventDefault();
    dispatch(deleteTask(id));
    navigate("/");
  };

  const onEdit = (id, e) => {
    e.preventDefault();
    navigate("/edit");
  };
  const data = tasks.map((task) => (
    <div
      key={task.id}
      className="tasks border-[#001000] border-[1px] py-[1px] col-span-1
    "
    >
      <TaskItem
        task={task}
        onDelete={(e) => {
          onDelete(task.id, e);
        }}
        onEdit={onEdit}
        className="task"
      />
    </div>
  ));

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : tasks.length > 0 ? (
        <div className="grid grid-col-1 md:grid-cols-2">{data}</div>
      ) : (
        <>
          <p>No task available</p>
        </>
      )}
    </>
  );
};

export default TaskList;
