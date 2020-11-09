const express = require("express");

const db = require("../db/models");

const { requireAuth } = require("../auth");
const { asyncHandler } = require("./utils");
const app = require("../app");

const router = express.Router();

app.get("/", asyncHandler((req, res) => {
    res.render("create-podcast")
}))