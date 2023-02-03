const Joi = require('joi')

const userSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    isAdmin: Joi.boolean(),

    access_token: [
        Joi.string(),
        Joi.number()
    ]
})

module.exports = userSchema