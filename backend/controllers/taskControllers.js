const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");
const User = require("../models/userModel");

const getTasks = asyncHandler(async (req, res) => {
  const task = await Task.find({ user: req.user.id });
  res.status(200).json(task);
});

const getEachTaskByUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (task.user.toString() === user.id) {
    res.status(200).json(task);
  } else {
    res.status(400);
    throw new Error("Task not created by user");
  }
});

const setTask = asyncHandler(async (req, res) => {
  const { text } = req.body;

  console.log(req.body);
  if (!text) {
    res.json(400);
    throw new Error("Please add a task");
  }

  const task = await Task.create({ text, user: req.user.id });
  res.status(200).json(task);
});
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  if (task.user.toString() !== user.id) {
    res.status(400);
    throw new Error("User not authorized to update");
  }
  const updatedtask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedtask);
});
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("Task not found");
  }
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }
  if (task.user.toString() !== user.id) {
    res.status(400);
    throw new Error("User not authorized to delete");
  }
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
  getEachTaskByUser,
};
