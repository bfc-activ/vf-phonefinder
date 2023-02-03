const Joi = require('joi')

const userSchema = Joi.object({
    email: Joi.string()
        .required(),

    name: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    isAdmin: Joi.boolean()
        .required()
})

module.exports = userSchema