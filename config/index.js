// comment in for development
// require("dotenv").config();

module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  sessionSecret: process.env.SESSION_SECRET,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
};
