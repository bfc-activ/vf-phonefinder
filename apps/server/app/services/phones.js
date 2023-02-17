const Phones = require('../models/phone')
require('../models/answer')

module.exports = {
    findAll: async () => {
        return Phones.find().populate('answers')
    },
    findPhoneByAnswers: async (body) => {
        return Phones.aggregate([
            {
                $addFields: {
                    matchingAnswers: {
                        $size: {
                            $setIntersection: ['$answers', body.answers]
                        }
                    }
                }
            },
            {
                $sort: {
                    matchingAnswers: -1,
                }
            },
            {
                $limit: 1
            }
        ])
    }
}