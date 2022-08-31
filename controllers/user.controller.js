const User = require("../models/user.model");

const getUsers = (req, res) => {
  User.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getUser = (req, res) => {
  User.findOne({ _id: req.params.UserID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "User not found" }));
};

const createUser = (req, res) => {
  User.create(req.body)
    .then((result) => {
      console.log(req.body);
      res.status(200).json({ result });
    })
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.UserID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "User not found" }));
};

const deleteUser = (req, res) => {
  User.findOneAndDelete({ _id: req.params.UserID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "User not found" }));
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};