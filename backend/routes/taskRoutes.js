const express = require("express");

const router = express.Router();
const {
  getTasks,
  getEachTaskByUser,
  setTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

const { protect } = require("../middleware/authMiddleware");

//@desc get all tasks by  a user
//@route is proteted route

router.get("/", protect, getTasks);

//@desc get each task by a user, showing details
//@route is proteted route
router.get("/:id", protect, getEachTaskByUser);

//@desc create task route
//@route is proteted route

router.post("/", protect, setTask);

//@desc edit task route
//@route is proteted route
router.put("/:id", protect, updateTask);

//@desc delete task route
//@route is proteted route
router.delete("/:id", protect, deleteTask);
module.exports = router;
