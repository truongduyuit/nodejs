const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoomSchema = new Schema({
    NameRoom: {
        type: String,
        required: true
    },
    Floor: {
        type: Number
    },
    Square: {
        type: Number
    },
    Price: {
        type: Number
    },
    Description: {
        type: String
    },
    MaxPeople: {
        type: Number
    },
    Status: {
        type: Number
    },
    Block: [{
        type: Schema.Types.ObjectId,
        ref: 'Block'
    }]
})

const Room = mongoose.model("Room", RoomSchema)

module.exports = Room