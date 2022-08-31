const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_PASS +
      "@cluster0.nu24oss.mongodb.net/cartissimo",

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MangoDB"))
  .catch((error) => console.log("Connection failed with MangoDB", error));
