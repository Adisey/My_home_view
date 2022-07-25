import { floors$ } from "../store";
import initFloors from "../../public/initFloors.json";
import { IHouseFloorSettings } from "../interfaces";

export const fetchInitFloors = () => {
  floors$.next(initFloors.reverse());
};

export const getFloors = (): IHouseFloorSettings[] => initFloors;
