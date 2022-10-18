const request = require("request");
const express = require("express");
const cors = require("cors");

const getPaginationFromRequest = require("./utils/getPaginationFromRequest");

require("dotenv").config();

const port = process.env.PORT;
const flightsHost = process.env.FLIGHTS_HOST;
const flightsPort = process.env.FLIGHTS_PORT;
const flightsUrl = `http://${flightsHost}:${flightsPort}/flights`;

const runApp = async () => {
  const app = express();

  app.use(cors());

  app.get("/flights", async (req, res) => {
    const { page, limit } = getPaginationFromRequest(req);
    const proxy = request(`${flightsUrl}?page=${page}&limit=${limit}`);
    req.pipe(proxy).pipe(res);
  });

  app.listen(port, () => {
    console.log(`Orchestrator listening at http://localhost:${port}`);
  });
};

module.exports = runApp;
