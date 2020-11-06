const express = require("express");
const { check, validationResult } = require("express-validator");

const db = require("../db/models");
const { Playlist, Podcast, PlaylistPodcastJoin } = db;
const { findAllPlaylists } = require("../data/playlist-data");
const { requireAuth } = require("../auth");
const { asyncHandler } = require("./utils");

const router = express.Router();

// User playlist home page

router.get("/",
    requireAuth,
    asyncHandler(async (req, res) => {
        const { userId } = req.session.auth;
        const playlists = await Playlist.findAll({
            where: { userId }
        });
        //TODO: Connect to front-end
        res.render('playlist', { playlists });
    }));


// Returns data of specified playlist
router.get(
	"/:id(\\d+)",
	requireAuth,
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const playlist = await Playlist.findOne({
			where: { id },
			include: [
				{
					model: PlaylistPodcastJoin,
					include: [Podcast],
				},
			],
		});
		res.json(playlist);
	})
);

const playlistValidators = [
	check("title")
		.exists({ checkFalsy: true })
		.withMessage("Please provide a playlist title")
		.isLength({ max: 25 })
		.withMessage(
			"The playlist title must not be more than 25 characters long"
		),
];

// TODO: Add implementation for when users create a new-playlist via form submission
router.post(
	"/new-playlist",
	requireAuth,
	playlistValidators,

	asyncHandler(async (req, res) => {
		const { title } = req.body;
		const playlist = Playlist.build({
			title,
		});

		const validatorErrors = validationResult(req);
		if (validatorErrors.isEmpty()) {
			await playlist.save();
			const playlists = await findAllPlaylists();
			res.json(playlists);
		} else {
			const errors = validatorErrors.array().map((error) => error.msg);
			console.log("ERROR", errors);
			res.json(errors);
		}
	})
);

router.post(
	"/:playlistId(\\d)/podcasts",
	requireAuth,
	asyncHandler(async (req, res) => {
		const playlistId = parseInt(req.params.playlistId, 10);
		const { podcastId } = req.body;
		const newJoin = await PlaylistPodcastJoin.create({
			podcastId,
			playlistId,
		});
		return res.status(200).json({ newJoin });
	})
);

router.put(
	"/:playlistId(\\d)/podcasts",
	requireAuth,
	asyncHandler(async (req, res) => {
		const playlistId = parseInt(req.params.playlistId, 10);
		const { currentJoinId } = req.body;
		const currentJoin = await PlaylistPodcastJoin.findOne({
			where: { id: currentJoinId },
		});
		await currentJoin.update({ playlistId });
		return res.status(200).json({ currentJoin });
	})
);

router.delete(
	"/:playlistId(\\d)/podcasts/:id(\\d)",
	requireAuth,
	asyncHandler(async (req, res) => {
		const playlistId = parseInt(req.params.playlistId, 10);
		const id = parseInt(req.params.id, 10);
		const currentJoin = await PlaylistPodcastJoin.findOne({
			where: { playlistId, podcastId: id },
		});
		await currentJoin.destroy({ truncate: true });
		return res.status(200).json({ message: "deleted!! wooo" });
	})
);
module.exports = router;
