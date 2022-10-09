const express = require("express");
const router = express.Router();

const {
  getSports,
  getSport,
  getManyTeams,
  getManySports,
  createSports,
  updateSports,
  deleteSports,
} = require("../controllers/sports.controller");

router.get("/", getSports);

router.get("/:search", getManySports);

router.get("/:league/:search", getManyTeams);

router.get("/:SportsID", getSport);

router.post("/", createSports);

router.put("/:SportsID", updateSports);

router.delete("/:SportsID", deleteSports);

module.exports = router;
