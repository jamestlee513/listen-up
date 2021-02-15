// comment in for development
const env = process.env.NODE_ENV || "development";

if (env === "development") {
  require("dotenv").config();
}

module.exports = {
  environment: env,
  port: process.env.PORT || 8080,
  sessionSecret: process.env.SESSION_SECRET,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
};
