const express = require('express')
const create = require('../controllers/properties/create')
const getproperties = require('../controllers/properties/getproperties')
const deletehouse = require("../controllers/properties/deletehouse");
const getproperty = require("../controllers/properties/getproperty");

// initialize router
const router = express.Router()

router.post('/create', [], create)

router.post("/getproperties", [], getproperties);

router.post("/deletehouse", [], deletehouse);

router.post("/getproperty", [], getproperty);

module.exports = router