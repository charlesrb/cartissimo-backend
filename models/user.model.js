const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sport: { type: [String] },
  equipeNba: { type: [String] },
  equipeNfl: { type: [String] },
  equipeNhl: { type: [String] },
  equipeMlb: { type: [String] },
  equipeSoccer: { type: [String] },
  joueur: { type: Array },
  collec: { type: String },
  premiereCarte: { type: String },
  actif: { type: String },
  pays: { type: String },
  cp: { type: String },
  pseudo: { type: String },
  message: { type: String },
  twitter: { type: String, default: "non" },
  instagram: { type: String, default: "non" },
  contact: { type: String },
  mail: { type: String },
});

module.exports = mongoose.model("User", userSchema);
