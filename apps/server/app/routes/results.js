const { post } = require('../controllers/results')
const router = require('express').Router()

module.exports = router
    .post('/', post)

