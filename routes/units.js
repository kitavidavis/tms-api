const express = require('express')
const create = require('../controllers/units/create')

// initialize router
const router = express.Router()

router.post('/create', [], create)

module.exports = router