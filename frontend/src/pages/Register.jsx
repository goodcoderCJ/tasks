import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { register, reset } from "../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    if (isError) {
      return toast.error(message);
    }

    if (isSuccess || user) {
      toast.success("Registered user successfully");
      navigate("/login");
    }
    return () => {
      dispatch(reset());
    };
  }, [isError, message, navigate, dispatch, user, isSuccess]);
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password fields does not match");
    }
    const userData = { name, email, password };
    dispatch(register(userData));
  };
  return (
    <>
      {isLoading} ? <Spinner /> : ({" "}
      <section className="heading flex flex-col justify-center items-center mb-[2em] mt-[2em]">
        <h1 className="flex items-center justify-center text-[2rem]">
          <FaUser className="mr-[0.5em]" /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
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
      )
    </>
  );
};
export default Register;
