import { HttpClient } from "./HttpClient";

const baseUrl = import.meta.env.VITE_ORCHESTRATOR_BASE_URL;

export const httpClient = new HttpClient({ baseUrl });
