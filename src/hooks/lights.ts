import { useState } from "react";
import { IRoomsName } from "../settings/myHouse";

type IIsRoomLighting = {
  [id in IRoomsName]?: boolean;
};

type IUseLightsStore = {
  setLightRoom(room?: IRoomsName, isLight?: boolean): void;
  isLight: boolean;
};

export const useLightsStore = (room?: IRoomsName): IUseLightsStore => {
  const [lightsStore, setLightsStore] = useState<IIsRoomLighting>({});
  const setLightRoom = (room?: IRoomsName, isLight?: boolean): void => {
    if (room) {
      setLightsStore({ ...lightsStore, [room]: !!isLight, hall: !!isLight });
    }
  };

  return { setLightRoom, isLight: !!room && !!lightsStore[room] };
};
