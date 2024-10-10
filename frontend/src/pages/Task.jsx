import { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskList from "../components/TaskList";

import { useNavigate } from "react-router-dom";

const Task = () => {
  const { user, message } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [user, message, navigate]);

  return (
    <div>
      <p>Welcome on board {user && user.name}</p>

      <TaskList />
    </div>
  );
};

export default Task;
