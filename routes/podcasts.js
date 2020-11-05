const express = require("express");

const db = require("../db/models"); // check to db
const { Podcast } = db;
const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils"); //need make utils

const router = express.Router();

//localhost:8080/podcasts
router.get(
	"/",
	asyncHandler(async (req, res) => {
		// res.send('Testing podcast route...');
		// TODO: Connect to front-end PUG
		//TODO: Implement me:
		const podcasts = await Podcast.findAll({
			order: [["title", "ASC"]],
			limit: 10,
		});
		res.render("podcast-list", { podcasts });
	})
);

router.get(
	"/:id(\\d+)",
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const podcast = await Podcast.findByPk(id);
		// res.send(`This route works. This is ID: ${req.params.id} `);

		// TODO: connect to front-end PUG
		res.render("podcast.pug", { podcast });
	})
);

router.post(
	"/:id(\\d+)/rating",
	requireAuth,
	asyncHandler(async (req, res) => {
		console.log("at top of route");
		const { rating } = req.body;
		// TODO: debug user id
		const { userId } = req.session.auth;
		const id = parseInt(req.params.id, 10);
		const newRating = await db.Rating.build({
			userId: userId,
			podcastId: id,
			rating: parseInt(rating, 10),
		});
		return res.status(200).json({ newRating });

	})
);
module.exports = router;
