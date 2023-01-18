const { post } = require('../controllers/login')
const router = require('express').Router()

module.exports = router
    .post('/', post)

