require('dotenv').config();
const express = require('express')
const auth = express.Router()

const authorization = require('../helpers/authorization')

auth.get('/generate-token',async (req, res, next) => {
    try{
        const token = await authorization.generateToken(req.body.user, process.env.SECRET_KEY, process.env.ACCESS_TOKEN_LIFE)
        return res.status(200).json({
            token
        })
    }
    catch(err ){
        console.log("err ", err)
        return next(err)
    }
})

module.exports = auth