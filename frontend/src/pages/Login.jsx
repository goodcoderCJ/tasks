import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
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
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, message, isSuccess, user, navigate, dispatch]);

  //login handler function

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
    console.log(userData);
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <section className="heading flex flex-col justify-center items-center mb-[2em] mt-[2em]">
            <h1 className="flex items-center justify-center text-[2rem]">
              <FaSignInAlt className="mr-[0.5em]" /> Login Your Acount
            </h1>
            <p>Login to your account</p>
          </section>
          <section className="form">
            <form onSubmit={onSubmit}>
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
      )}
    </>
  );
};
export default Login;
