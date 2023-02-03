const mongoose = require('mongoose')
const {bool, boolean} = require("joi");

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String,
        required: true,
        maxLength: 50
    },
    email: {

    },
    isAdmin: {
        type: boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = User = mongoose.model('user', UserSchema)
