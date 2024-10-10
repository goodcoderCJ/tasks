import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskDetails = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const { id } = useParams();
  const eachProduct = tasks.find((task) => {
    return task._id.toString() === id;
  });
  return (
    <div key={id}>
      <p  className="text-[1.5rem] text-[#0f0f0f]">{eachProduct.text}</p>
      <p>{new Date(eachProduct.createdAt).toLocaleString("en-US")}</p>
      <p className="text-[0.5rem] text-[#6b6b6b]">{new Date(eachProduct.updatedAt).toLocaleString("en-US")}</p>
    </div>
  );
};

export default TaskDetails;
