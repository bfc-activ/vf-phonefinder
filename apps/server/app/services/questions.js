const Answers = require('../models/answer')  // required to populate answers
const Question = require('../models/question')

module.exports = {
    get: async () => {
        const response = await Question.find().populate('answers')
        /**
         * Note: This will return the array of documents in the correct order.
         *       I think it is because the _id is a unique number. So, there
         *       is no need to sort the result.
         *
         *       Additionally, populate answers embeds the answer object in the
         *       answers array in the question with the `populate` method.
         */
        return response
    }
}