const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const QuestionSchema = new Schema({
    position: { type: Number, unique: true, required: true },
    text: { type: String, required: true },
    type: {
        type: String,
        enum: ['single_choice', 'multiple_choice', 'slider'],
        required: true
    },
    answers: [{ type: ObjectId, ref: 'tag' }]  // TODO: review this.
})

module.exports = mongoose.model('question', QuestionSchema)
