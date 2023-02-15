const Phones = require('../models/phone')
require('../models/answer')

module.exports = {
    findAll: async () => {
        return Phones.find().populate('answers')
    }
}