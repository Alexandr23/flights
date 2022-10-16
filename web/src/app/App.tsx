import React from "react";

import { Layout } from "../layout";
import { Header } from "../header";
import { FlightList } from "../flight";
import { useStore } from "../store";

import "./App.css";

export const App: React.FC = () => {
  const getFlights = useStore((state) => state.getFlights);

  // INIT DATA
  React.useEffect(() => {
    getFlights();
  }, [getFlights]);

  return <Layout header={<Header />} body={<FlightList />} />;
};
