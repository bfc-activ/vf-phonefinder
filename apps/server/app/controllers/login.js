const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
  post: async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        error: "Please enter all fields",
      });
    }

    const email = req.body.email.replace(/\s/g, "");
    const password = req.body.password;

    // Find user by email
    User.findOne({ email }).then((user) => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({
          error: "We searched everywhere, but didn't find your account.",
        });
      }

      // Check password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          };

          // Sign token
          jwt.sign(
            payload,
            process.env.MONGO_SECRET,
            {
              expiresIn: 604800, // 7 days in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          return res.status(400).json({ error: "Password incorrect" });
        }
      });
    });
  },
};
