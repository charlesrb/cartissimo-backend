const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getUsers);

router.get("/:UserID", getUser);

router.post("/", createUser);

router.put("/:UserID", updateUser);

router.delete("/:UserID", deleteUser);

module.exports = router;
