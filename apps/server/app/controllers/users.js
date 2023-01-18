const { get, remove } = require('../services/users')

module.exports = {
    get: async (req, res, next) => {
        try {
            res.send(await get())
        } catch (err) {
            console.error(`Error while getting user`, err.message)
            next(err)
        }
    },
    remove: async (req, res, next) => {
        try {
            res.send(await remove())
        } catch (err) {
            console.error(`Error while deleting user`, err.message)
            next(err)
        }
    }
}
