const mongoose = require("mongoose");

const nbaSchema = new mongoose.Schema({
  nbaId: { type: String, require: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Nba", nbaSchema);
