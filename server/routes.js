const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello nervos')
})

module.exports = router
