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
            res.send(await registerUser(req.body))
        } catch (e) {
            return next(e)
        }
    }
}
