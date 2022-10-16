import { useStore } from "../../store";
import { Flight } from "../types";

export const useFlights = (): Flight[] => {
  return useStore((state) => state.flights);
};
