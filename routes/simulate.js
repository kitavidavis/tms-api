const express = require('express')
const simulate = require('../controllers/payments/simulate')

// initialize router
const router = express.Router()

router.post('/pay', [], simulate)

module.exports = router