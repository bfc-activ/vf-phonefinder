const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    _id: {
        type: String
    },
    displayText: {
        type: String
    },
    photoURL: {
        type: String
    },
    position: {
        type: Number,
        required: true,
    }
});

module.exports = Answer = mongoose.model("Answer", AnswerSchema);
