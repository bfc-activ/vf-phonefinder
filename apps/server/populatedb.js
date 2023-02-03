console.log('This script populates some test data to the database.')

const Phone = require('./app/models/v2/phone')
const Tag = require('./app/models/v2/characteristic')
const Question = require('./app/models/v2/question')
const User = require('./app/models/v2/user')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)  // Future proofing setting
mongoose.set('strict', 'throw')  // throw errors when schema validation fails

async function main() {
    try {
        const MONGO_URI = process.env.MONGO_URI
        await mongoose.connect(MONGO_URI)
        console.log('Successful connection to MongoDB')
    } catch (e) {
        console.log('Please ensure that the MONGO_URI environment variable is set correctly. You may need to put parentheses around the URI string.')
        throw e
    }
}

main().catch(e => console.error(e))

const phones = []
const users = []
const tag = []
const questions = []

function phoneCreate(name, price, description, tags) {
    let phoneDetail = {
        name: name,
        price: price,
        description: description,
        tags: tags
    }
}




