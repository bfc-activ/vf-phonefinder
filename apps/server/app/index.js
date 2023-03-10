const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const passport = require("passport");
const bodyParser = require("body-parser");
const errorHandler = require("./middleware/errorHandler");
const rateLimiter = require("./middleware/rateLimiter")

require("dotenv").config();

const app = express();

// Middleware
app.use(rateLimiter)
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET,POST,PUT,DELETE",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/user"));
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/questions", require("./routes/questions"));
app.use("/admin", require("./routes/admin"));
app.use("/results", require("./routes/results"))
app.use("/phones", require("./routes/phones"))

app.use(errorHandler);


module.exports = app;
