const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    displayName: { type: String, required: true, maxLength: 50 },
    role: { type: String, enum: ['admin', 'customer'], required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, // TODO: encrypt this
    latestSurveyId: { type: String} // optional
})