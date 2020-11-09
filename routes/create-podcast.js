const express = require("express");

const db = require("../db/models");

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");
const app = require("../app");

const router = express.Router();

router.get("/", csrfProtection, asyncHandler(async(req, res) => {
    res.render("create-podcast")
}))

module.exports = router