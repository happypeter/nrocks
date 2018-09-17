const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const apiRouter = require('./routes')
const config = require('./config/config')

const app = express()
mongoose.Promise = global.Promise
mongoose.connect(
  config.url,
  {
    useMongoClient: true
  }
)
const db = mongoose.connection
db.on('error', console.log)
db.once('open', () => {
  console.log('db connection success!')
})

const isProduction = process.env.NODE_ENV === 'production'

if (!isProduction) {
  app.use(logger('dev'))
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', cors(), apiRouter)

app.listen(3001, () => console.log('running on port 3001...'))
