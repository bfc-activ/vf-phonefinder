const { submitResult } = require('../services/results')

module.exports = {
    post: async (req, res, next) => {
        try {
            // Note: API only handles 1 result rather than an array of results.
            //       Can be added in a future version.
            res.send(await submitResult(req.body))
        } catch (err) {
            console.error(`Error while submitting result`, err.message)
            next(err)
        }
    }
}
