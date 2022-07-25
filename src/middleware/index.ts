import { fetchInitLights } from "./light";
import { fetchInitFloors } from "./floor";

export * from "./light";
export * from "./floor";

export const fetchInitData = () => {
  fetchInitFloors();
  fetchInitLights();
};
