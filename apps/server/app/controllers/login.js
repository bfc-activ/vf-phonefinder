const { post } = require('../services/login')

module.exports = {
    post: async (req, res, next) => {
        try {
            res.send(await post())
        } catch (err) {
            console.error(`Error while posting login`, err.message)
            next(err)
        }
    }
}
