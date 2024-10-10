const Auth_URI = "http://localhost:8000/api/users/";
import axios from "axios";

const register = async (userData) => {
  const response = await axios.post(Auth_URI, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const login = `login`;
  const response = await axios.post(Auth_URI + login, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = { register, login, logout };

export default authService;
