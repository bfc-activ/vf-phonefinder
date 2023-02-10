const mongoose = require('mongoose')
const Schema = mongoose.Schema
const QuestionSchema = new Schema({
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
        displayText: {
            type: String,
            required: true
        },
        photoURL: {
          type: String
        },
        identifier_id: {
            type: String,
            required: true,
            ref: 'Identifier'
        }
    }]
})
module.exports = Question = mongoose.model('Question', QuestionSchema)
