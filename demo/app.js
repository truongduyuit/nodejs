require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const app = express()
const routers = require('./src/routers')
const auth = require('./src/auth/auth')
require('./database')

// middleware
app.use(logger('dev'))
app.use(bodyParser.json())

// routers
app.use('/api', routers)
app.use('/auth', auth)

// catch 404 error and forward to handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler function
app.use(() => {
    const err = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    // response to client
    return res.status(status).json({
        error : {
            message : error.message
        }
    })
})

const port = app.get('port') || 3001
app.listen(port, () => {
    console.log(`App listening at port ` + port)
})

module.exports = app