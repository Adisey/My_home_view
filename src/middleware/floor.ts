import { floors$ } from "../store";
import initFloors from "../../public/initFloors.json";
import { IHouseFloorSettings } from "../interfaces";

export const getFloors = (): IHouseFloorSettings[] =>
  initFloors as IHouseFloorSettings[];

export const fetchInitFloors = () => {
  const floors = getFloors();
  floors$.next(floors.reverse());
};
