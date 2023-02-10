const { get } = require("../controllers/admin");
const User = require("../models/user");
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

router.get("/", (req, res) => {
  console.log(req.user);
  res.json({ message: "Hello from admin" });
  //   get(req, res);
});

module.exports = router;
