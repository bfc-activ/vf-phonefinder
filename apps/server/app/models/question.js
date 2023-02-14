const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    _id: {
        type: Number
    },
    displayText: {
        type: String,
        required: true
    },
    photoURL: {
        type: String
    },
    type: {
        type: String,
        enum: ['single_choice', 'multiple_choice', 'slider'],
        required: true
    },
    answers: [{
        type: String,
        required: true,
        ref: 'Answer'
    }],
})

module.exports = Question = mongoose.model('Question', QuestionSchema)
