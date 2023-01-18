const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login")
const registerRouter = require("./routes/register")
const questionRouter = require("./routes/question")

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/question", questionRouter);


// Listen to a port
app.listen(3000, () =>
  console.log("PhoneFinder API is listening on port 3000.")
);
