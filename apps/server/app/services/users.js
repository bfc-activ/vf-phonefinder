const Users = require('../models/user')

module.exports = {
    getAll: async () => {
        return Users.find()
    },
    remove: async () => {
        return "delete user"
    }
}