const { getAll, deleteById } = require('../services/users')

module.exports = {
    getAll: async (req, res, next) => {
        try {
            res.send(await getAll())
        } catch (err) {
            console.error(`Error while getting user`, err.message)
            next(err)
        }
    },
    removeById: async (req, res, next) => {
        try {
            res.send(await deleteById(req.params))
        } catch (err) {
            console.error(`Error while deleting user`, err.message)
            next(err)
        }
    }
}
