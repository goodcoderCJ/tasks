import { useState, useEffect } from "react";
import { FaPen } from "react-icons/fa";
import { createTask } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CreateTask = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      toast.error(message);
    }
  }, [user, message]);

  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text }));
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
        <p>Please Add Your Task</p>
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
              placeholder="Enter your task"
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
export default CreateTask;
