import { FlightFromServer, Flight } from "../types";

export const shapeFlight = (flightFromServer: FlightFromServer): Flight => {
  return {
    id: flightFromServer.id,
    flight_number: flightFromServer.flight_number,
    airline: flightFromServer.airline,
    departure: {
      departureAt: flightFromServer.departure_at,
      city: flightFromServer.departure_city,
      airport: flightFromServer.departure_airport,
    },
    arrival: {
      arrivalAt: flightFromServer.arrival_at,
      city: flightFromServer.arrival_city,
      airport: flightFromServer.arrival_airport,
    },
  };
};
