const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const app = express();

module.exports = app
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  .use("/", require("./routes/index"))
  .use("/users", require("./routes/user"))
  .use("/login", require("./routes/login"))
  .use("/register", require("./routes/register"))
  .use("/questions", require("./routes/questions"));
