const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGODB_URI,

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MangoDB"))
  .catch((error) => console.log("Connection failed with MangoDB", error));
