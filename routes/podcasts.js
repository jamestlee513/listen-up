const express = require('express');
const bcrypt = require('bcryptjs');

const db = require("../db/models"); // check to db
const { loginUser, logoutUser } = require("../auth"); //need make auth
const { csrfProtection, asyncHandler } = require("./utils"); //need make utils

const router = express.Router();

router.get('/', asyncHandler((req, res) => {
    res.send('Testing podcast route...');
    // TODO: Connect to front-end PUG
    // res.render('podcast-list');
}));

router.get('/:id(\\d+)', asyncHandler((req, res) => {
    const id = parseInt(req.params.id, 10);
    // res.send('this test route works??');
    res.send(`This route works. This is ID: ${req.params.id}`);

    // TODO: connect to front-end PUG
    // res.render('podcast')
}))





module.exports = router;