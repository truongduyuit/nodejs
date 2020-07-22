const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlockSchema = new Schema({
    NameBlock: {
        type: String,
        required = true
    },
    Address: {
        type: String
    },
    Description: {
        type: String
    },
    Owner: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Block = mongoose.model('Block', BlockSchema)

module.exports = Block