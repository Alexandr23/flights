import React from "react";
import classnames from "classnames";

import { Button } from "../../button";
import { AirlineEmirates, AirlineGeneric } from "../../icons";
import { TimeHelpers } from "../../time";
import { Flight } from "../types";

import classes from "./FlightCard.module.css";

type FlightCardProps = {
  flight: Flight;
};

export const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const [isSelected, setIsSelected] = React.useState(false);

  const departureAt = TimeHelpers.getTimeFormatted(
    flight.departure.departureAt
  );
  const arrivalAt = TimeHelpers.getTimeFormatted(flight.arrival.arrivalAt);
  const duration = TimeHelpers.getDurationFormatted(
    flight.departure.departureAt,
    flight.arrival.arrivalAt
  );

  const AirlineLogo =
    flight.airline.name === "Emirates" ? AirlineEmirates : AirlineGeneric;

  const handleClick = React.useCallback(() => {
    setIsSelected((value) => !value);
  }, []);

  return (
    <div
      className={classnames({
        [classes.flightCard]: true,
        [classes.flightCard_selected]: isSelected,
      })}
    >
      <div className={classes.header}>
        <div className={classes.headerInner}>
          <div className={classes.airline}>
            <div className={classes.airlineLogo}>
              <AirlineLogo />
            </div>
            <div>
              <div className={classes.flightNumber}>{flight.flight_number}</div>
              <div className={classes.airline}>{flight.airline.name}</div>
            </div>
          </div>

          <Button onClick={handleClick}>
            {isSelected ? "Unselect" : "Select"}
          </Button>
        </div>
      </div>

      <div className={classes.body}>
        <div className={classes.location}>
          <div className={classes.datetime}>{departureAt}</div>
          <div className={classes.airport}>
            {flight.departure.city} ({flight.departure.airport.iata})
          </div>
        </div>

        <div className={classes.route}>
          <div className={classes.duration}>{duration}</div>
          <div className={classes.track} />
        </div>

        <div className={`${classes.location} ${classes.location_right}`}>
          <div className={classes.datetime}>{arrivalAt}</div>
          <div className={classes.airport}>
            {flight.arrival.city} ({flight.arrival.airport.iata})
          </div>
        </div>
      </div>
    </div>
  );
};
