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
  wallLineDepth: 2,
};

export const defaultFloor: IFloorSettings = {
  id: "floor",
  title: "defaultFloor",
  lengthY: 1000, // cm.
  lengthX: 1000, // cm.
  extendWall: appConfig.extendWall, // cm.
  internalWall: appConfig.internalWall, // cm.
};

export const defaultRoom: IRoomSettings = {
  id: "room",
  title: "defaultRoom",
  startX: 0,
  startY: 0,
  lengthX: 500,
  lengthY: 500,
  isLightActive: true,
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
