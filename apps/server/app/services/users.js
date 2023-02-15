const Users = require('../models/user')

module.exports = {
    getAll: async () => {
        return Users.find()
    },
    deleteById: async (params) => {
        return Users.deleteOne({ _id: params.userId })
    }
}