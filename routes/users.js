const express = require('express');
const bcrypt = require('bcrypt');
const { check, validationResult } = require("express-validator");

const db = require("../db/models")
const { loginUser, logoutUser } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");


const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
