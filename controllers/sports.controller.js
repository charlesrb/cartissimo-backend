const Sports = require("../models/sports.model");

const getSports = (req, res) => {
  Sports.find({})
    .then((result) => res.status(200).json({ result }))
    .catch((error) => res.status(500).json({ msg: error }));
};

const getManySports = async (req, res) => {
  try {
    const data = await Sports.find({});

    let sports = [];
    for (const sport of data) {
      for (const equipe of sport.teams) {
        if (equipe.toLowerCase().includes(req.params.search.toLowerCase())) {
          sports.push(sport.name + " - " + equipe);
        }
      }
      for (const joueur of sport.players) {
        if (joueur.toLowerCase().includes(req.params.search.toLowerCase())) {
          sports.push(sport.name + " - " + joueur);
        }
      }
    }
    res.json(sports);
  } catch (error) {
    res.status(404).json({ err: 1, message: error.message, error });
  }
};

const getManyTeams = async (req, res) => {
  try {
    const data = await Sports.findOne({ name: req.params.league });

    let sports = [];
    for (const equipe of data.teams) {
      if (equipe.toLowerCase().includes(req.params.search.toLowerCase())) {
        sports.push(equipe);
      }
    }
    console.log(sports);

    res.json(sports);
  } catch (error) {
    res.status(404).json({ err: 1, message: error.message, error });
  }
};

const getSport = (req, res) => {
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
  getSports,
  getManyTeams,
  getManySports,
  getSport,
  createSports,
  updateSports,
  deleteSports,
};
