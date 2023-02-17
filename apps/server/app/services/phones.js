const Phones = require('../models/phone')
require('../models/answer')

module.exports = {
    findAll: async () => {
        return Phones.find().populate('answers')
    },
    findPhoneByAnswers: async (body) => {
        const phone = await Phones.aggregate([
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
                $limit: 1  // still returns an array
            }
        ])
        return phone[0]  // return only 1
    }
}