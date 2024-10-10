/* eslint-disable react/prop-types */
import { FaEdit, FaBitbucket } from "react-icons/fa";
import { Link } from "react-router-dom";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <>
      <Link to={`/task/${task.id}`}>
       
          <p> {task.text} </p>
          <div className="edit-delete">
            <span>
              <FaEdit onClick={onEdit} />
            </span>
            <span>
              <FaBitbucket onClick={onDelete} />
            </span>
      
        </div>
      </Link>
    </>
  );
};

export default TaskItem;
