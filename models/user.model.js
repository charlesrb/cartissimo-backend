const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sport: { type: [String] },
  equipeNba: { type: [String] },
  equipeNfl: { type: [String] },
  equipeNhl: { type: [String] },
  equipeMlb: { type: [String] },
  equipeSoccer: { type: [String] },
  joueur: { type: String },
  collec: { type: String },
  premiereCarte: { type: String },
  actif: { type: String },
  pays: { type: String },
  cp: { type: String },
  pseudo: { type: String },
  message: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  contact: { type: String },
  mail: { type: String },
});

module.exports = mongoose.model("User", userSchema);
