const { get, remove } = require('../controllers/users')
const router = require('express').Router()

module.exports = router
    .get('/', get)
    .delete('/', remove)

