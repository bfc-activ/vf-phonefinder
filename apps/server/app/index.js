const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();

require("dotenv").config();

module.exports = app
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(
    cors({
      origin: true,
      credentials: true,
      methods: "GET,POST,PUT,DELETE",
    })
  )
  .use("/", require("./routes/index"))
  .use("/users", require("./routes/user"))
  .use("/login", require("./routes/login"))
  .use("/register", require("./routes/register"))
  .use("/questions", require("./routes/questions"));
