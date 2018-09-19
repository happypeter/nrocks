const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = require('./routes')

const app = express()

const isProduction = process.env.NODE_ENV === 'production'

if (!isProduction) {
  app.use(logger('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', cors(), apiRouter)

app.listen(3001, () => console.log('running on port 3001...'))
