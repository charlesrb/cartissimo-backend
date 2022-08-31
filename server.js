const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const sportsRoutes = require("./routes/sports.route");
const userRoutes = require("./routes/user.route");

require("dotenv").config({ path: "./config/.env" });
require("./config/db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.listen(process.env.PORT, () => {
  console.log("Listening on port 3000");
});

app.use("/api/sports", sportsRoutes);
app.use("/api/user", userRoutes);
