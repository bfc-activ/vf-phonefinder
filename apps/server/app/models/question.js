const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    position: {
        type: Number,
        required: true,
        unique: true
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
    answer_ids: [{
        type: String,
        required: true
    }]
})

module.exports = Question = mongoose.model('Question', QuestionSchema)
