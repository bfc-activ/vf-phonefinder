const mongoose = require('mongoose')
// Future proofing setting
mongoose.set('strictQuery', false)
mongoose.set('strict', 'throw')  // throw errors when schema validation fails

const Answer = require('../../models/answer')
const Question = require('../../models/question')

const connect = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI
        await mongoose.connect(MONGO_URI)
        console.log('Successful connection to MongoDB')
    } catch (e) {
        console.log('Please ensure that the MONGO_URI environment variable is set correctly. You may need to put parentheses around the URI string.')
        throw e
    }
}

connect().then(() => {
    populateDB().then(() => {
        console.log('done')
    })
})

const populateDB = async () => {
    console.log('populating answers')
    const answerData = require('../../models/sampleData/allAnswers.json')
    await Answer.insertMany(answerData.answers)
    console.log('ok')

    console.log('populating questions')
    const questionData = require('../../models/sampleData/allQuestions.json')
    await Question.insertMany(questionData.questions)
    console.log('ok')

    // const User = require('../../models/user')
}

module.exports = { populateDB }
