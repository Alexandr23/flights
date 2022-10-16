export type Location = {};

export type Airport = {
  id: number;
  name: string;
  iata: string;
};

export type Airline = {
  id: number;
  name: string;
};

export type Flight = {
  id: number;
  flight_number: string;
  airline: Airline;
  departure: {
    departureAt: string;
    city: string;
    airport: Airport;
  };
  arrival: {
    arrivalAt: string;
    city: string;
    airport: Airport;
  };
};

export type FlightFromServer = {
  id: number;
  flight_number: string;
  airline_id: number;
  airline: Airline;
  arrival_airport_id: number;
  arrival_airport: Airport;
  arrival_at: string;
  arrival_city: string;
  departure_airport_id: number;
  departure_airport: Airport;
  departure_at: string;
  departure_city: string;
};

export type FlightState = {
  flights: Flight[];
  getFlights: () => Promise<void>;
};
