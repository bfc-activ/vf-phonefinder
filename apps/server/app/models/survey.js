const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const SurveySchema = new Schema(
    {
        // TODO: Do we need createdBy? Each user will have their latest surveyId, and we can keep each survey anonymous.
        createdBy: { type: ObjectId, ref: 'author', required: true },
        tagIds: [{ type: ObjectId, ref: 'tag' }]  // TODO: Should this be required?
    },

    { timestamps: true }  // Add the .createdAt property. E.g. 2022-02-26T16:37:48.244Z
)

module.exports = mongoose.model('survey', SurveySchema)
