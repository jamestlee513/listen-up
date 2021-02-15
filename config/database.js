const { username, password, database, host } = require("./index").db;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    logging: false,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    seederStorage: "sequelize",
    // dialectOptions: {
    //   ssl: true,
    // },
    // ssl: { rejectUnauthorized: false },
  },
};
