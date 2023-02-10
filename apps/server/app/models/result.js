const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ResultSchema = new Schema({
        user_id: {
            type: String,
            required: true,
            ref: 'User'
        },
        identifier_ids: [{
            type: String,
            required: true,
            ref: 'Identifiers'
        }]
    },
    {
        // Adds createdAt and updatedAt fields in MongoDB
        timestamps: true,
    }
);
module.exports = Result = mongoose.model("Result", ResultSchema);
