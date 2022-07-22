import { IRoomsName } from "../settings/myHouse";

type IIsRoomLighting = {
  [id in IRoomsName]?: boolean;
};
const useLights = (): IIsRoomLighting => {
  return { hall: true };
};

export const useIsLightsRoom = (room?: IRoomsName): boolean => {
  const lights = useLights();
  return !!room && !!lights[room];
};
