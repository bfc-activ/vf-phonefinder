const { get } = require('../controllers/index')
const router = require('express').Router()

module.exports = router
    .get('/', get)
