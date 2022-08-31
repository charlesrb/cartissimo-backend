const Sports = require("../models/sports.model");

const getSportss = (req, res) => {
  Sports.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getSports = (req, res) => {
  Sports.findOne({ _id: req.params.SportsID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Sports not found" }));
};

const createSports = (req, res) => {
  Sports.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateSports = (req, res) => {
  Sports.findOneAndUpdate({ _id: req.params.SportsID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Sports not found" }));
};

const deleteSports = (req, res) => {
  Sports.findOneAndDelete({ _id: req.params.SportsID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Sports not found" }));
};

module.exports = {
  getSportss,
  getSports,
  createSports,
  updateSports,
  deleteSports,
};
