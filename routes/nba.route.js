const express = require("express");
const router = express.Router();

const {
  getNbas,
  getNba,
  createNba,
  updateNba,
  deleteNba,
} = require("../controllers/nba.controller");

router.get("/", getNbas);

router.get("/:NbaID", getNba);

router.post("/", createNba);

router.put("/:NbaID", updateNba);

router.delete("/:NbaID", deleteNba);

module.exports = router;
