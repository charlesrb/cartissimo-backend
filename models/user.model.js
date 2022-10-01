const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sport: { type: [String] },
  NBA: { type: [String] },
  NFL: { type: [String] },
  NHL: { type: [String] },
  MLB: { type: [String] },
  SOCCER: { type: [String] },
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
