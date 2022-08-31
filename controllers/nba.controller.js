const Nba = require("../models/nba.model");

const getNbas = (req, res) => {
  Nba.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getNba = (req, res) => {
  Nba.findOne({ _id: req.params.NbaID })
    .then((result) => res.status(200).json({ result }))
    .catch(() => res.status(404).json({ msg: "Nba not found" }));
};

const createNba = (req, res) => {
  Nba.create(req.body)
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const updateNba = (req, res) => {
  Nba.findOneAndUpdate({ _id: req.params.NbaID }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Nba not found" }));
};

const deleteNba = (req, res) => {
  Nba.findOneAndDelete({ _id: req.params.NbaID })
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(404).json({ msg: "Nba not found" }));
};

module.exports = {
  getNbas,
  getNba,
  createNba,
  updateNba,
  deleteNba,
};
