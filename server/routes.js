const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const config = require('./config')

router.get('/courses', (req, res) => {
  try {
    const filePath = path.join(process.env.HOME, `${config.docPath}/index.json`)
    const courses = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    res.json({ courses })
  } catch (err) {
    console.log('get courses err...', err)
  }
})

module.exports = router
