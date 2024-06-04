require("dotenv").config();

const development = {
  db: {
    dbUrl: process.env.DB_URL,
  },
};

module.exports = development;
