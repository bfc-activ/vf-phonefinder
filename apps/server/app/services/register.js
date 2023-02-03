const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserValidationSchema = require('../helpers/validation/user')
const UserModel = require('../models/user')

module.exports = {
    register: async () => {
        return "post register"
    },
    validateRequestBody: async (body) => {
        await UserValidationSchema.validateAsync(body)
        // using Joi user schema to validate the request body.
    },
    registerUser: async (body) => {
        // 1. Check the email doesn't already exist
        if (await UserModel.findOne({ email: body.email })) {  // will be null if not found
            const err = new Error(`A user with the email "${body.email}" already exists.`)
            err.status = 400  // it's the user's fault.
            throw err
        }

        // 2. Hash the password
        const hashedPassword = await bcrypt.hash(body.password, 10)

        await UserModel.create({
            email: body.email,
            name: body.name,
            password: hashedPassword,
            isAdmin: body.isAdmin
        })


        // 3. JWT token baby.

    }
}
