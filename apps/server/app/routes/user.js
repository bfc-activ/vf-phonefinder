const { getAll, removeById } = require('../controllers/users')
const router = require('express').Router()

module.exports = router
    .get('/', getAll)
    .delete('/:userId', removeById)

