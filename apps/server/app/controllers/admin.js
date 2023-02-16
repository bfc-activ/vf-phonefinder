const User = require("../models/user");

module.exports = {
  get: async (req, res) => {
    if (!req.user) {
      return res.status(400).json({
        error: "You need to be authenticated to access this route",
      });
    }

    // Find user by email
    User.find({}).then((users) => {
      // Check if users exists
      if (!users) {
        return res.status(404).json({
          error: "We searched everywhere, but didn't find your account.",
        });
      }

      // Return all the users
      res.json({ users: users });
    });
  },
};
