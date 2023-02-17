const Results = require('../models/result')
const phoneService = require('../services/phones')
require('../models/user')
require('../models/answer')

module.exports = {
    submit: async (body) => {
        const newResult = await Results.create({
            user: body.user,
            answers: body.answers
        })
        console.log(`New result created:\n${newResult}`)
        return phoneService.findPhoneByAnswers(body)  // return the phone recommendation
    },
    findAll: async () => {
        return Results.find().populate('user').populate('answers')
    },
    findByResultId: async (params) => {
        return Results.findById(params.resultId)
            .populate('user')
            .populate('answers')
    },
    findAllByUserId: async (params) => {
        return Results.find({ user: params.userId })
            .populate('user')
            .populate('answers')
        // Note: This should return in the order of last creation.
    },
    findLatestByUserId: async (params) => {
        return Results.findOne({ user: params.userId })
            .sort({ createdAt: -1 })
            .populate('user')
            .populate('answers')
    },
}
