const sequelize = require("sequelize");
const database = require("../database");

const DataTypes = sequelize.DataTypes;

const Airline = database.define(
  "airlines",
  { name: { type: DataTypes.TEXT, allowNull: false } },
  { timestamps: false }
);

module.exports = Airline;
