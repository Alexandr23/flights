import React from "react";

import { AirlineGeneric } from "../../icons";

import classes from "./FlightListEmpty.module.css";

export const FlightListEmpty: React.FC = () => {
  return (
    <div className={classes.empty}>
      <div className={classes.icon}>
        <AirlineGeneric />
      </div>
      <div className={classes.title}>No Flights Found</div>
    </div>
  );
};
