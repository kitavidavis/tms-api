const express = require("express");
const create = require("../controllers/staff/create");
const getall = require("../controllers/staff/getallstaff");
const getstaff = require("../controllers/staff/getstaff");
const deletestaff = require("../controllers/staff/deletestaff");

const router = express.Router();

router.post("/create", [], create);

router.post("/getall", [], getall);

router.post("/getstaff", [], getstaff);

router.post("/deletestaff", [],deletestaff);

module.exports = router;
