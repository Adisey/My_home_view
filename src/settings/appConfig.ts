import { IFloorSettings, IRoomSettings, IWindow } from "../interfaces";

export const appConfig = {
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

export const defaultWindow: IWindow = {
  id: "window",
  wallPlace: "up",
  margin: 20,
  width: 50,
};
