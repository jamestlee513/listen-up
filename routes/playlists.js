const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../db/models");
const { Playlist, Podcast, PlaylistPodcastJoin } = db;
const { requireAuth, restoreUser } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils");

const router = express.Router();

// User playlist home page
router.get("/", restoreUser, requireAuth, asyncHandler(async (req, res) => {
    const podcasts = await Playlist.findAll({
        order: [['title', 'ASC']]
    })
    res.render('playlists', { podcasts });

    res.send('route localhost:8080/playlists');
}));

// Returns data of specified playlist
router.get(
    "/:id(\\d+)",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const playlist = await Playlist.findOne({
            where: { id },
            include: [
                {
                    model: PlaylistPodcastJoin,
                    include: [Podcast]
                }
            ]
        });
        res.json(playlist)
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
