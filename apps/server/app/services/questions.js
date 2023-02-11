const QuestionModel = require('../models/question')

module.exports = {
    get: async () => {
        return QuestionModel.find()
    }
}