const { validateRequestBody, registerUser } = require('../services/register')
const jwt = require('jsonwebtoken')

module.exports = {
    post: async (req, res, next) => {
        // validate request body
        try {
            await validateRequestBody(req.body)
        } catch (e) {
            e.status = 400
            return next(e)
        }

        try {
            await registerUser(req.body)
        } catch (e) {
            return next(e)
        }

        res.send('OK')
    }
}
