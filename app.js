const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const podcastRouter = require("./routes/podcasts");
const playlistRouter = require("./routes/playlists");

const db = require("./db/models");
const { sessionSecret } = require("./config/index");
const app = express();
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const { restoreUser } = require("./auth");
// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, "public")));

const store = new SequelizeStore({
	db: db.sequelize,
});

app.use(
	session({
		secret: sessionSecret,
		store,
		resave: false,
		saveUninitialized: false,
	})
);
store.sync();

app.use(restoreUser);
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/podcasts", podcastRouter);
app.use("/playlists", playlistRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
