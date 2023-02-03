const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// TODO: Add more validation to schemas
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50
    },
    email: {
        required: true,
        type: String
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    // Adds createdAt and updatedAt fields in MongoDB
    timestamps: true,
  }
);

module.exports = User = mongoose.model("user", UserSchema);
