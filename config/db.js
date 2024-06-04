const mongoose = require("mongoose");
const development = require("./config");

mongoose
  .connect(development.db.dbUrl)
  .then(() => console.log("DB is connected"))
  .catch((error) => console.log(error.message));
