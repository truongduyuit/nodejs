const express = require('express')
const users = express.Router();

const userController = require('./user.service')

users.get('', async (req, res, next) => {
    try {
        const users = await userController.GetUsers(req.body.user)
        return res.status(200).json({
            message: "Get users successfully !",
            users,
        })
    }
    catch(err)
    {
        return next(err)
    }
})

users.post('/create-user', async (req, res, next) => {
    try {
        const user = await userController.CreateUser(req.body.user)
        return res.status(201).json({
            message: "Create user successfully !",
            user,
        })
    }
    catch(err)
    {
        return next(err)
    }
})

module.exports = users