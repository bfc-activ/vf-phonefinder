const Results = require('../models/result')

module.exports = {
    submitResult: async (body) => {
        return Results.create({
            user: body.user,
            answers: body.answers
        })
    }
}