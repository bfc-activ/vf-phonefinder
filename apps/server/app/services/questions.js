const QuestionModel = require('../models/question')

module.exports = {
    get: async () => {
        // return all questions
        return QuestionModel.find()
    }
}