const sequelize = require("sequelize");
const database = require("../database");

const DataTypes = sequelize.DataTypes;

const Airport = database.define(
  "airports",
  {
    name: { type: DataTypes.TEXT, allowNull: false },
    iata: { type: DataTypes.TEXT, allowNull: false },
  },
  { timestamps: false }
);

module.exports = Airport;
