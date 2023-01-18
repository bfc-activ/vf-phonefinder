const { post } = require('../services/register')

module.exports = {
    post: async (req, res, next) => {
        try {
            res.send(await post())
        } catch (err) {
            console.error(`Error while posting register`, err.message)
            next(err)
        }
    }
}
