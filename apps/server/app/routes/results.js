const resultsController = require('../controllers/results')

const router = require('express').Router()

module.exports = router
    .post('/', resultsController.post)
    .get('/', resultsController.getAll)
    .get('/:resultId', resultsController.getByResultId)
    .get('/users/:userId', resultsController.getAllByUserId)
    .get('/users/:userId/latest', resultsController.getLatestByUserId)


