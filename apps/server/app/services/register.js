const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const UserSchema = require('../helpers/validation/user')

module.exports = {
    register: async () => {
        return "post register"
    },
    validateRequestBody: async (body) => {
        try{
            const value = await UserSchema.validateAsync(body)
            console.log(value)
        } catch (e) {
            console.error(`Error validating body: ${e}`)
        }
    }
}

