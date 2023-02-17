const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
// Future proofing setting
mongoose.set('strictQuery', false)
mongoose.set('strict', 'throw')  // throw errors when schema validation fails

const Answer = require('../../models/answer')
const Question = require('../../models/question')
const User = require('../../models/user')
const Phone = require('../../models/phone')

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

const populateAnswers = async () => {
    console.log('populating answers')
    const answerData = require('../../models/sampleData/allAnswers.json')
    await Answer.insertMany(answerData.answers)
    console.log('ok')
}

const populateQuestions = async () => {
    console.log('populating questions')
    const questionData = require('../../models/sampleData/allQuestions.json')
    await Question.insertMany(questionData.questions)
    console.log('ok')
}

const populateUsers = async () => {
    console.log('populating users')

    const adminPassword = process.argv[2]
    const adminHashedPassword = await bcrypt.hash(adminPassword, 10)
    const adminUser = {
        email: 'admin@email.com',
        name: 'admin',
        password: adminHashedPassword,
        isAdmin: true
    }

    const userPassword = process.argv[3]
    const userHashedPassword = await bcrypt.hash(userPassword, 10)
    const user = {
        email: 'user@email.com',
        name: 'user',
        password: userHashedPassword
    }

    await User.create(user)
    await User.create(adminUser)

    console.log('ok')
}

const populatePhones = async () => {
    console.log('populating phones')
    const phonesData = require('../../models/sampleData/allPhones.json')
    await Phone.insertMany(phonesData.phones)
    console.log('ok')
}

const populateDB = async () => {
    // await populateAnswers()
    // await populateQuestions()
    // await populateUsers()
    await populatePhones()
}

connect().then(() => {
    populateDB().then(() => {
        console.log('done')
    })
})

module.exports = { populateDB }
