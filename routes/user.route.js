const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  login,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getUsers);

router.get("/:UserID", getUser);

router.post("/", createUser);

router.post("/login", login);

router.put("/:UserID", updateUser);

router.delete("/:UserID", deleteUser);

module.exports = router;
