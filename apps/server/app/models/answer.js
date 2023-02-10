const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AnswerSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    photoURL: {
        type: String
    }
})

module.exports = Answer = mongoose.model('Answer', AnswerSchema)
