const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../db/models"); // check to db
const { Podcast } = db;
const { loginUser, logoutUser } = require("../auth"); //need make auth
const { csrfProtection, asyncHandler } = require("./utils"); //need make utils

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
	// res.send('Testing podcast route...');
	// TODO: Connect to front-end PUG
	//TODO: Implement me:
	const podcasts = await Podcast.findAll({
		order: [['title', 'ASC']],
		limit: 10
	});
	res.render("podcast-list", { podcasts });
}));


//TODO: Return data with ratings, reviews, replies joined
router.get(
	"/:id(\\d+)",
	asyncHandler(async (req, res) => {
		const id = parseInt(req.params.id, 10);
		const podcast = await Podcast.findByPk(id);
		res.send(`This route works. This is ID: ${req.params.id} `);

		// TODO: connect to front-end PUG
		// res.render('podcast', { podcast });
	}));

module.exports = router;
