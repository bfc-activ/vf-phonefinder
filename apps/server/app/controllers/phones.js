const phonesService = require('../services/phones')

module.exports = {
    getAll: async (req, res, next) => {
        try {
            res.send(await phonesService.findAll())
        } catch (err) {
            console.error(`Error while fetching phones`, err.message)
            next(err)
        }
    }
}
