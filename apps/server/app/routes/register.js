const { post } = require('../controllers/register')
const router = require('express').Router()

module.exports = router
    .post('/', post)

