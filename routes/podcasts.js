const express = require("express");

const db = require("../db/models"); // check to db

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils"); //need make utils

const router = express.Router();

//localhost:8080/podcasts
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const { userId } = req.session.auth;
		const podcasts = await db.Podcast.findAll({
			order: [["title", "ASC"]],
			limit: 10,
		}).map(async (pod) => ({
			id: pod.id,
			host: pod.host,
			description: pod.description,
			hostName: pod.hostName,
			title: pod.title,
			podcastImage: pod.podcastImage,
			rating:
				(await db.Rating.findOne({
					where: { podcastId: pod.id, userId },
				})) || db.Rating.build({ podcastId: pod.id, rating: 0 }),
		}));

		res.render("podcast-list", { podcasts });
	})
);


router.get(
	"/:id(\\d+)",
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const podcast = await db.Podcast.findByPk(id);
		const { userId } = req.session.auth;
		const rating =
			(await db.Rating.findOne({
				where: { podcastId: id, userId },
			})) || db.Rating.build({ rating: 0 });

		const playlists =
		(await db.Playlist.findAll({ where: { userId } })) || [{title: "fake"}];

		res.render("podcast.pug", { podcast, rating, playlists });
	})
);

router.post(
	"/:id(\\d+)/rating",
	requireAuth,
	asyncHandler(async (req, res) => {
		const { rating } = req.body;
		// TODO: debug user id
		const { userId } = req.session.auth;
		const id = parseInt(req.params.id, 10);
		const newRating = await db.Rating.create({
			userId: userId,
			podcastId: id,
			rating: parseInt(rating, 10),
		});
		return res.status(200).json({ rating: newRating });
	})
);

router.put(
	"/:podcastId(\\d+)/rating/:id(\\d+)",
	requireAuth,
	asyncHandler(async (req, res) => {
		const { rating } = req.body;
		// TODO: debug user id
		const { userId } = req.session.auth;
		const podcastId = parseInt(req.params.podcastId, 10);
		const id = parseInt(req.params.id, 10);
		const existingRating = await db.Rating.findOne({
			where: { podcastId, userId, id },
		});
		if (!existingRating) {
			return res.status(404).json({ message: "Not found" });
		}
		await existingRating.update({ rating });
		return res.status(200).json({ rating: existingRating });
	})
);
module.exports = router;
