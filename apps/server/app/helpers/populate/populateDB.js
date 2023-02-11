const mongoose = require('mongoose')

// Future proofing setting
mongoose.set('strictQuery', false)
mongoose.set('strict', 'throw')  // throw errors when schema validation fails

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

const Answer = require('../../models/answer')
const answerData = require('../../models/sampleData/allAnswers.json')

const Question = require('../../models/question')
const questionData = require('../../models/sampleData/allQuestions.json')

const User = require('../../models/user')

const populateDB = async () => {
    // await Answer.create(answerData.answers)
    await Question.create(questionData.questions)
}

connect().then(() => {
    populateDB().then(() => {
        console.log('done')
    })
})

module.exports = { populateDB }
