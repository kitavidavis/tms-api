const express = require('express')
const create = require("../controllers/complains/create");
const getcomplain = require("../controllers/complains/getcomplain");
const getcomplains = require('../controllers/complains/getcomplains');

// initialize router
const router = express.Router()

router.post('/create', [], create)

router.post("/getcomplain", [], getcomplain);

router.post("/getcomplains", [], getcomplains);

module.exports = router