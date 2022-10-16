const express = require("express");

const Airline = require("./models/Airline");
const Airport = require("./models/Airport");
const Flight = require("./models/Flight");

require("dotenv").config();

const port = process.env.PORT;

const runApp = () => {
  const app = express();

  app.get("/flights", async (req, res) => {
    try {
      const results = await Flight.findAll({
        include: [
          { model: Airline, foreignKey: "airline_id" },
          {
            model: Airport,
            foreignKey: "departure_airport_id",
            as: "departure_airport",
          },
          {
            model: Airport,
            foreignKey: "arrival_airport_id",
            as: "arrival_airport",
          },
        ],
      });

      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.send(JSON.stringify(results));
    } catch (error) {
      res.setHeader("Content-Type", "application/json");
      res.status(500);
      res.send(JSON.stringify({ error: "Something went wrong" }));
    }
  });

  app.listen(port, () => {
    console.log(`Flights listening at http://localhost:${port}`);
  });
};

module.exports = runApp;
