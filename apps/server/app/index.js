const express = require("express")
const cors = require("cors");
const logger = require("morgan")
const errorHandler = require('./helpers/errorHandler')
require("dotenv").config()

const app = express()

module.exports = app
    // middleware tools
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

    // routes
  .use("/", require("./routes/index"))
  .use("/users", require("./routes/user"))
  .use("/login", require("./routes/login"))
  .use("/register", require("./routes/register"))
  .use("/questions", require("./routes/questions"))

    // error handling
    .use(errorHandler)
