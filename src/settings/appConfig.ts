import {
  IDoorSettings,
  IFloorSettings,
  IRoomSettings,
  IWindowSettings,
} from "../interfaces";

export const appConfig = {
  publicFile: "public/initFloors.json",
  extendWall: 20,
  internalWall: 10,
};

export const defaultFloor: IFloorSettings = {
  id: "floor",
  title: "defaultFloor",
  length: 1000, // cm.
  width: 1000, // cm.
  mainWall: appConfig.extendWall, // cm.
};

export const defaultRoom: IRoomSettings = {
  id: "room",
  title: "defaultRoom",
  startX: 0,
  startY: 0,
  lengthX: 500,
  lengthY: 500,
  isLightActive: true,
  wallUp: appConfig.internalWall / 2,
  wallRight: appConfig.internalWall / 2,
  wallDown: appConfig.internalWall / 2,
  wallLeft: appConfig.internalWall / 2,
};

export const defaultWindow: IWindowSettings = {
  id: "window",
  wallPlace: "up",
  margin: 20,
  width: 50,
};

export const defaultDoor: IDoorSettings = {
  id: "door",
  wallPlace: "up",
  margin: 20,
  width: 50,
};
