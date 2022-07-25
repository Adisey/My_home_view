import { ILight } from "../interfaces";
import { lights$ } from "../store";
import initLights from "../../public/initLights.json";

export const lightOn = (id: ILight): void => {
  lights$.next([...lights$.value, id]);
};

export const lightOff = (id: ILight): void => {
  lights$.next(lights$.value.filter((i: ILight) => i !== id));
};

export const fetchInitLights = () => {
  lights$.next(initLights);
};
