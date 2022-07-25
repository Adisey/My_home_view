import { ILight } from "../interfaces";
import { lights$ } from "../store";

export const lightOn = (id: ILight): void => {
  lights$.next([...lights$.value, id]);
};

export const lightOff = (id: ILight): void => {
  lights$.next(lights$.value.filter((i: ILight) => i !== id));
};
