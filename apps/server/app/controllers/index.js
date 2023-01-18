const { get } = require('../services/index')

module.exports = {
    get: async (req, res, next) => {
        try {
            res.send(await get())
        } catch (err) {
            console.error(`Error while getting index`, err.message)
            next(err)
        }
    }
}
