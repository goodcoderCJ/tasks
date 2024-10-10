import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaPen } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { updateTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EditTask = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const { user, message } = useSelector((state) => state.auth);
  const { id } = useParams();
  const eachTask = tasks.find((task) => {
    return task._id.toString() === id;
  });

  useEffect(() => {
    if (!user) {
      toast.error(message);
    }
  }, [user, message]);

  const [text, setText] = useState(eachTask.text);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id, text }));
    setText("");
    navigate("/");
  };
  return (
    <>
      <section className="heading flex flex-col justify-center items-center mb-[2em] mt-[2em]">
        <h1 className="flex items-center justify-center text-[2rem]">
          <FaPen className="mr-[0.5em]" />
          Add Task
        </h1>
        <p>Please Edit Your Task</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="text"
              name="text"
              value={text}
              placeholder="Edit your task"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btnblock text-[#fff] text-[1.2rem] font-[medium] cursor-pointer bg-stone-900"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
export default EditTask;
