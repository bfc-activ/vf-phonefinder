const { get } = require('../controllers/questions')
const router = require('express').Router()

module.exports = router
    .get('/', get)
