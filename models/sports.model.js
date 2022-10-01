const mongoose = require("mongoose");

const sportsSchema = new mongoose.Schema({
  sport: { type: String },
  name: { type: String },
  teams: { type: Array },
  players: { type: Array },
});

module.exports = mongoose.model("Sports", sportsSchema);
