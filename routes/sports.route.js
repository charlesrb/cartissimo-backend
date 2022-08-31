const express = require("express");
const router = express.Router();

const {
  getSportss,
  getSports,
  createSports,
  updateSports,
  deleteSports,
} = require("../controllers/sports.controller");

router.get("/", getSportss);

router.get("/:SportsID", getSports);

router.post("/", createSports);

router.put("/:SportsID", updateSports);

router.delete("/:SportsID", deleteSports);

module.exports = router;