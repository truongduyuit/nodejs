var User = require('./user.model')
const { Error } = require('mongoose')

const GetUsers = async () => {
    try{
        const users = await User.find({})
        return users
    }
    catch (err)
    {
        return new Error(err)
    }
}
const CreateUser = async newUser => {
    try{
        const user = new User(newUser)
        await user.save()

        return user
    }
    catch (err)
    {
        return new Error(err)
    }
}

module.exports = {
    CreateUser,
    GetUsers
}