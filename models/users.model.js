const mongoose = require("mongoose");

const usersData = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  class: {
    type: Number,
    require: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new mongoose.model("users", usersData);
