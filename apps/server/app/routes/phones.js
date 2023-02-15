const phonesController = require('../controllers/phones')

const router = require('express').Router()

module.exports = router
    .get('/', phonesController.get)



