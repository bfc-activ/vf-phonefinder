const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const IdentifierSchema = new Schema({
        _id: {
            type: String,
            required: true
        }
    }
);
module.exports = Identifier = mongoose.model("Identifier", IdentifierSchema);
