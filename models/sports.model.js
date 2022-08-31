const mongoose = require("mongoose");

const sportsSchema = new mongoose.Schema({
  league: { name: String, equipes: { name: [String] } },
});

module.exports = mongoose.model("Sports", sportsSchema);
