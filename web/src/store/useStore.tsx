import create from "zustand";

import { createFlightStore } from "../flight/store/createFlightStore";

import { AppState } from "./types";

export const useStore = create<AppState>((...args) => ({
  ...createFlightStore(...args),
}));
