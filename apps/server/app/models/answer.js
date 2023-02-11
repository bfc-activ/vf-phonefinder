const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AnswerSchema = new Schema(
    {
        _id: {
            type: String,
            required: true
        },
        displayText: {
            type: String
        },
        photoURL: {
            type: String
        }
    }
);

module.exports = Answer = mongoose.model("Answer", AnswerSchema);
