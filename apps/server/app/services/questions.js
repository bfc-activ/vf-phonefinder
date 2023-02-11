const QuestionModel = require('../models/question')
const AnswerModel = require('../models/answer')

module.exports = {
    get: async () => {

        let questions = await QuestionModel.find()

        for (let question in questions) {

        }

        const result = await Promise.all(questions.map(async (question) => (
            {...question, answer: "hello"}
        )))
            // return
            // question["answers"] = "hello"
            // return question


            // console.log(question)
            // const questionAnswers = await AnswerModel.find({
            //     questionNumber: 1
            // }).exec()

            // console.log(questionAnswers)
            // question.answers = questionAnswers
            // return question
        // }))


        console.log(result)

        return result
    }
}