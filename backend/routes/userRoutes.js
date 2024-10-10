const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  createUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

router.post("/", createUser);

router.post("/login", loginUser);

router.get("/currentuser", protect, getUser);

module.exports = router;
