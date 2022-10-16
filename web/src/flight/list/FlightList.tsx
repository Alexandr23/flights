import React from "react";

import { FlightCard } from "../card/FlightCard";
import { useFlights } from "../hooks";
import { FlightListEmpty } from "./FlightListEmpty";

import classes from "./FlightList.module.css";

type FlightListProps = {};

export const FlightList: React.FC<FlightListProps> = () => {
  const flights = useFlights();

  if (flights.length === 0) {
    return <FlightListEmpty />;
  }

  return (
    <div className={classes.flightList}>
      {flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight} />;
      })}
    </div>
  );
};
