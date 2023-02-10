const QuestionModel = require('../../models/question')

module.exports = populateQuestions = async () => {

    console.log('populating DB')

    await QuestionModel.create({
        title: "Question 1",
        type: "single_choice",
        position: 1,
        answers: ["answer 1", "answer 2", "answer 3"]
    })

    await QuestionModel.create({
        title: "Question 2",
        type: "multiple_choice",
        position: 2,
        answers: ["answer 1", "answer 2", "answer 3", "answer 4", "answer 5"]
    })

    await QuestionModel.create({
        title: "Question 3",
        type: "slider",
        position: 3,
        answers: ["level 1", "level 2", "level 3", "level 4", "level 5"]
    })

    console.log('done')

}