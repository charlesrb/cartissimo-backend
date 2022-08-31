const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, require: true },
  equipe: { type: String },
  joueur: { type: String },
  collec: { type: String },
  annee: { type: Number },
  actif: { type: Number },
  cp: { type: String },
  pseudo: { type: String },
  message: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  contact: { type: String },
  mail: { type: String },
});

module.exports = mongoose.model("User", userSchema);
