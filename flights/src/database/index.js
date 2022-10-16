const sequelize = require("sequelize");

require("dotenv").config();

const Sequelize = sequelize.Sequelize;

const host = process.env.DATABASE_HOST;
const databaseName = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;

const database = new Sequelize(databaseName, user, password, {
  host,
  port,
  dialect: "postgres",
  logging: false,
});

module.exports = database;
