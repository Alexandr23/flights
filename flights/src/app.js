const express = require("express");

const getPaginationFromRequest = require("./utils/getPaginationFromRequest");
const tryCatch = require("./utils/tryCatch");
const errorHandler = require("./middleware/errorHandler");
const Airline = require("./models/Airline");
const Airport = require("./models/Airport");
const Flight = require("./models/Flight");

require("dotenv").config();

const port = process.env.PORT;

const runApp = () => {
  const app = express();

  app.get(
    "/flights",
    tryCatch(async (req, res) => {
      const { page, limit } = getPaginationFromRequest(req);
      const offset = (page - 1) * limit;

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
        limit,
        offset,
      });

      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.send(JSON.stringify(results));
    })
  );

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Flights listening at http://localhost:${port}`);
  });
};

module.exports = runApp;
