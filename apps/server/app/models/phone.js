const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhoneSchema = new Schema({
    name: {
        type: String,
        required: true
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
        type: Number,
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
    answer_ids: [{
        type: String,
        ref: 'Answer',
        unique: true
    }]
})

module.exports = Phone = mongoose.model('Phone', PhoneSchema)