const User = require("../models/user");
const { registerUser } = require("../services/register");
const { getAll: getAllUsers } = require("../services/users");
const { get: getAllQuestions } = require("../services/questions");
const resultsService = require("../services/results");
const router = require("express").Router();

const isAdmin = (req, res, next) => {
  try {
    User.findOne({
      $and: [{ _id: req.body._id }, { isAdmin: true }],
    }).then((user) => {
      if (user) {
        next();
      } else {
        res.status(500).send({
          success: false,
          message: "You need to be an admin to access this route.",
        });
      }
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      success: false,
      message: "You need to be an admin to access this route.",
    });
  }
};

router.get("/", async (req, res) => {
  // Get all users
  const users = await getAllUsers();
  // Get all questions
  const questions = await getAllQuestions();
  // Get all results
  const results = await resultsService.findAll();

  return res.json({ users: users, questions: questions, results: results });
});

// Creates a new user with a randomised email and name
router.post("/create-dummy-user", async (req, res) => {
  // Create a randomised email
  const randomEmail =
    Math.random().toString(36).substring(2, 15) + "@gmail.com";

  // Create a randomised name
  const randomName = Math.random().toString(36).substring(2, 15);

  await registerUser({
    email: randomEmail,
    name: randomName,
    password: "test123",
  });

  return res.json({ message: "Created successfully" });
});

module.exports = router;
