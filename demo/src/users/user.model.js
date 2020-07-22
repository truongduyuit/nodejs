const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    Username: {
        type: String,
        // required = true
    },
    Pass: {
        type: String,
        // required = true
    },
    FullName: {
        type: String
    },
    Sex: {
        type: String
    },
    PhoneNumber: {
        type: String
    },
    Email: {
        type: String
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User