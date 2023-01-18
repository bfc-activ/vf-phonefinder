const { get } = require('../services/questions')

module.exports = {
    get: async (req, res, next) => {
        try {
            res.send(await get())
        } catch (err) {
            console.error(`Error while getting questions`, err.message)
            next(err)
        }
    }
}
