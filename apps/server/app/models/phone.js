const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhoneSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true  // doesn't work for some reason?
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    operatingSystem: {
        type: String,
        required: true
    },
    screenSizeInch: {
        type: Number,
        required: true
    },
    is5GCompatible: {
        type: Boolean,
        required: true
    },
    hasWirelessCharging: {
        type: Boolean,
        required: true
    },
    storageCapacityGB: {
        type: Number,
        required: true
    },
    answers: [{
        type: String,
        required: true,
        ref: 'Answer'
    }],
})

module.exports = Phone = mongoose.model('Phone', PhoneSchema)