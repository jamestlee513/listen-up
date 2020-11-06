const express = require('express');
const router = express.Router();

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils"); //need make utils

/* GET home page. */
router.get('/', csrfProtection, function(req, res, next) {
  res.render('index', { title: "Home" , csrfToken: req.csrfToken() });
});

module.exports = router;
