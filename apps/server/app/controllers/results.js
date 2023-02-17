const resultsService = require('../services/results')

module.exports = {
    submit: async (req, res, next) => {
        try {
            // Note: API only handles 1 result rather than an array of results.
            //       Can be added in a future version.
            res.send(await resultsService.submit(req.body))
        } catch (err) {
            console.error(`Error while submitting result`, err.message)
            next(err)
        }
    },
    getAll: async (req, res, next) => {
        try {
            res.send(await resultsService.findAll())
        } catch (err) {
            console.error(`Error while fetching results`, err.message)
            next(err)
        }
    },
    getByResultId: async (req, res, next) => {
        try {
            res.send(await resultsService.findByResultId(req.params))
        } catch (err) {
            console.error(`Error while fetching result with ${req.params}`, err.message)
            next(err)
        }
    },
    getAllByUserId: async (req, res, next) => {
        try {
            res.send(await resultsService.findAllByUserId(req.params))
        } catch (err) {
            console.error(`Error while fetching results with ${req.params}`, err.message)
            next(err)
        }
    },
    getLatestByUserId: async (req, res, next) => {
        try {
            res.send(await resultsService.findLatestByUserId(req.params))
        } catch (err) {
            console.error(`Error while fetching latest result with ${req.params}`, err.message)
            next(err)
        }
    }
}
