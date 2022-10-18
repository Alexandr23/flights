import { StateCreator } from "zustand";

import { AppState } from "../../store";
import { httpClient } from "../../http-client";
import { FlightState, FlightFromServer } from "../types";
import { FlightHelpers } from "../helpers";

export const createFlightStore: StateCreator<AppState, [], [], FlightState> = (
  set
) => ({
  flights: [],
  getFlights: async () => {
    try {
      const response: FlightFromServer[] = await httpClient.get(
        "/flights?page=1&limit=100"
      );
      const flights = response.map(FlightHelpers.shapeFlight);

      set(() => ({ flights }));
    } catch (error) {
      console.log(error);
    }
  },
});
