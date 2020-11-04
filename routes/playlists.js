const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../db/models");
const { requireAuth, restoreUser } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

const router = express.Router();

// User playlist home page
router.get("/", restoreUser, requireAuth, (req, res) => {
    
    // TODO: Connect to front-end PUG
    // TODO: Implement me:
    // const podcasts = db.Podcast.findAll() //TODO order and limit by
    res.send('route localhost:8080/playlists');
});

// Returns data of specified playlist
router.get(
    "/:id(\\d+)",
    restoreUser,
    requireAuth,
    asyncHandler((req, res) => {
        //TODO: use AJAX to populate the playlist container
        const id = parseInt(req.params.id, 10);
        res.end();
    })
);

// For when users create a new-playlist via form submission
router.post(
    "/new-playlist",
    requireAuth,
    restoreUser,
    asyncHandler((req, res) => {
        // TODO: implement a new-playlist handler
        // Steps: 
        //  Recieve req data
        //  Validate data
        //      if invalid, return error message
        //      else update database
        //           update front-end (maybe through AJAX)   
        res.end();
    })
)

module.exports = router;
