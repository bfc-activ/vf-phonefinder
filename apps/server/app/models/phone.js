const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PhoneSchema = new Schema({
    photoURL: { type: String, required: true },
    displayName: { type: String, required: true},
    price: { type: Number, required: true },
    displayText: { type: String, required: true },  // TODO: 'description'?
    is5GEnabled: { type: Boolean, required: true },
    hasWirelessCharging: { type: Boolean, required: true }
    // TODO: tags?
})

module.exports = mongoose.model('phone', PhoneSchema)
