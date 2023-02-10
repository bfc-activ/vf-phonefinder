const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['single_choice', 'multiple_choice', 'slider'],
        required: true
    },
    position: {
        type: Number,
        required: true,
        unique: true
    },
    answers: [{
        type: String
    }]
})

module.exports = Question = mongoose.model('Question', QuestionSchema)
