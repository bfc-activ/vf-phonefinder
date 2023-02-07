const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        required: true,
        type: String
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
  },
  {
    // Adds createdAt and updatedAt fields in MongoDB
    timestamps: true,
  }
);

module.exports = User = mongoose.model("user", UserSchema);
