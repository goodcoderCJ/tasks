const URL = "http://localhost:8000/api/tasks/";
import axios from "axios";

//createTask fetch from API
const createTask = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(URL, userData, config);
  return response.data;
};

//get tasks from API
const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(URL, config);
  return response.data;
};

//get each task by a user
const getTask = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(URL + id, config);
  return response.data;
};

const updateTask = async (id, userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(URL + id, userData, config);
  return response.data;
};

const deleteTask = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${URL}${id}`, config);
  return response.data;
};

const taskService = { createTask, getTasks, deleteTask, updateTask, getTask };
export default taskService;
