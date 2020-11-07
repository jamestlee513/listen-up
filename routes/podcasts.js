const express = require("express");

const db = require("../db/models");

const { requireAuth } = require("../auth");
const { asyncHandler } = require("./utils");

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

		const reviews = await db.Review.findAll({
			where: { podcastId: id },
		});
		const links = await db.Link.findAll({
			where: { podcastId: id },
		});

		const playlists = await db.Playlist.findAll({ where: { userId } });
		const playlistPodcastJoin =
			(await db.PlaylistPodcastJoin.findOne({
				where: { podcastId: id },
				include: [
					{
						model: db.Playlist,
						where: { userId },
					},
				],
			})) || db.PlaylistPodcastJoin.build();

		res.render("podcast.pug", {
			podcast,
			rating,
			playlists,
			playlistPodcastJoin,
			reviews,
			links,
		});
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

router.post(
	"/:id(\\d+)/reviews",
	asyncHandler(async (req, res) => {
		const { userId } = req.session.auth;
		const podcastId = parseInt(req.params.id, 10);

		const { review } = req.body;
		// console.log(review);
		const newReview = await db.Review.create({
			userId,
			podcastId,
			content: review,
		});

		res.redirect(`/podcasts/${podcastId}`);
	})
);

router.get(
	"/:podcastId(\\d+)/reviews/:id(\\d+)",
	asyncHandler(async (req, res) => {
		const { userId } = req.session.auth;
		const podcastId = parseInt(req.params.podcastId, 10);
		const reviewId = parseInt(req.params.id, 10);
		const existingReview = await db.Review.findOne({
			where: { podcastId, userId, id: reviewId },
		});

		res.render("review-edit.pug", { userId, podcastId, existingReview });
	})
);

router.post(
	"/:podcastId(\\d+)/reviews/:id(\\d+)",
	asyncHandler(async (req, res) => {
		const review = req.body.newReview;

		const { userId } = req.session.auth;
		const podcastId = parseInt(req.params.podcastId, 10);
		const reviewId = parseInt(req.params.id, 10);
		const existingReview = await db.Review.findOne({
			where: { podcastId, userId, id: reviewId },
		});

		await existingReview.update({ content: review });

		res.redirect(`/podcasts/${podcastId}`);
	})
);

module.exports = router;
