const Answers = require('../models/answer')  // required to populate answers
const Question = require('../models/question')

module.exports = {
    get: async () => {
        const response = await Question.find().populate('answers')
        console.log(response)
        return response
    }
}