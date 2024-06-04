const express = require("express");
const router = require("./routes/users.router");
require("./config/db");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", router);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});
app.use((req, res, next) => {
  res.status(404).send("note found");
});
app.use((error, req, res, next) => {
  res.status(404).send(error.message);
});
module.exports = app;
