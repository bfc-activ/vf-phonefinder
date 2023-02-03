const { validateRequestBody, registerUser } = require('../services/register')

module.exports = {
    post: async (req, res, next) => {
        // validate request body
        try {
            await validateRequestBody(req.body)
        } catch (e) {
            e.status = 400
            return next(e)
        }

        // talk to mongoDB
        try {
            const newUser = await registerUser(req.body)
            res.send(newUser)
        } catch (e) {
            return next(e)
        }
    }
}
