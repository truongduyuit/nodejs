const express = require('express')
const router = express.Router();

const auth = require('./auth/auth')
const users = require('./users/user.controller')

router.use('/auth', auth)
router.use('/users', users)

router.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Home page'
    })
})

module.exports = router