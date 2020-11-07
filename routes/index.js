const express = require("express");

const db = require("../db/models");

const { requireAuth } = require("../auth");
const { csrfProtection, asyncHandler } = require("./utils"); //need make utils
const e = require("express");
const router = express.Router();

/* GET home page. */
router.get(
    "/",
    csrfProtection,
    asyncHandler(async (req, res, next) => {
        let podcasts = await db.Podcast.findAll({
            order: [["title", "ASC"]],
            limit: 5,
        }).map(async (pod) => ({
            id: pod.id,
            host: pod.host,
            description: pod.description,
            hostName: pod.hostName,
            title: pod.title,
            podcastImage: pod.podcastImage,
            rating: await db.Rating.findOne({
                where: { podcastId: pod.id },
            }),
        }));

        let recommendation = await db.Podcast.findOne({
            where: { id: "4" },
        });

        podcasts.sort(
            (a, b) =>
                parseInt(b.rating.rating, 10) - parseInt(a.rating.rating, 10)
        );
        if (res.locals.authenticated) {
            res.redirect("/playlists");
        } else {
            res.render("index", {
                title: "Home",
                csrfToken: req.csrfToken(),
                podcasts,
                recommendation,
            });
        }
    })
);

module.exports = router;
