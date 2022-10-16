const sequelize = require("sequelize");

const database = require("../database");
const Airline = require("./Airline");
const Airport = require("./Airport");

const DataTypes = sequelize.DataTypes;

const Flight = database.define(
  "flights",
  {
    flight_number: { type: DataTypes.INTEGER, allowNull: false },
    airline_id: { type: DataTypes.INTEGER, allowNull: false },
    departure_at: { type: DataTypes.DATE, allowNull: false },
    departure_city: { type: DataTypes.TEXT, allowNull: false },
    departure_airport_id: { type: DataTypes.INTEGER, allowNull: false },
    arrival_at: { type: DataTypes.DATE, allowNull: false },
    arrival_city: { type: DataTypes.TEXT, allowNull: false },
    arrival_airport_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  { timestamps: false }
);

Flight.belongsTo(Airline, { foreignKey: "airline_id" });
Airline.hasMany(Flight, { foreignKey: "airline_id" });

Flight.belongsTo(Airport, {
  foreignKey: "departure_airport_id",
  as: "departure_airport",
});
Airport.hasMany(Flight, {
  foreignKey: "departure_airport_id",
  as: "departure_airport",
});

Flight.belongsTo(Airport, {
  foreignKey: "arrival_airport_id",
  as: "arrival_airport",
});
Airport.hasMany(Flight, {
  foreignKey: "arrival_airport_id",
  as: "arrival_airport",
});

module.exports = Flight;
