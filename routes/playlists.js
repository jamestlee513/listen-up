const express = require("express");
const { check, validationResult } = require("express-validator");

const db = require("../db/models");
const { Playlist, Podcast, PlaylistPodcastJoin } = db;
const { findAllPlaylists } = require("../data/playlist-data");
const { requireAuth, restoreUser } = require("../auth");
const { asyncHandler } = require("./utils");

const router = express.Router();

// User playlist home page
router.get("/",
    restoreUser,
    requireAuth,
    asyncHandler(async (req, res) => {
        const playlists = await findAllPlaylists();
        //TODO: Connect to front-end
        res.render('playlists', { playlists });
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

const playlistValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a playlist title')
        .isLength({ max: 25 })
        .withMessage('The playlist title must not be more than 25 characters long')
]

// For when users create a new-playlist via form submission
router.post(
    "/new-playlist",
    requireAuth,
    restoreUser,
    playlistValidators,

    asyncHandler(async (req, res) => {
        const { title } = req.body;
        const playlist = Playlist.build({
            title
        })

        const validatorErrors = validationResult(req);
        if (validatorErrors.isEmpty()) {
            await playlist.save();
            const playlists = await findAllPlaylists();
            res.json(playlists);
        } else {
            const errors = validatorErrors.array().map((error) => error.msg)
            console.log("ERROR", errors)
            res.json(errors);
        }
    })
)

module.exports = router;
