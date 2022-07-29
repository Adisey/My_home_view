import { ILightStatus } from "./light";

type IRoomPlace = "up" | "down" | "left" | "right";
type IDoorDirection = "leftPush" | "rightPush" | "leftPull" | "rightPull";

export type IWidthWalls = {
  wallUp?: number;
  wallRight?: number;
  wallDown?: number;
  wallLeft?: number;
};

export type IWindowSettings = {
  id: string;
  internalDepth?: number;
  margin?: number;
  wallPlace: IRoomPlace;
  width: number;
};

export type IDoorSettings = IWindowSettings & {
  direction?: IDoorDirection;
};

export type IWallHolesType = "window" | "door";

export type IWallHoleSettings = IDoorSettings & {
  type: IWallHolesType;
};

export type IRoomSettings = ILightStatus &
  IWidthWalls & {
    id: string;
    startX?: number;
    startY?: number;
    lengthX?: number;
    lengthY?: number;
    title?: string;
    windows?: IWindowSettings[];
    doors?: IDoorSettings[];
  };
export type IFloorSettings = {
  id: string;
  title?: string;
  length?: number;
  width?: number;
  mainWall?: number;
};

export type IHouseFloorSettings = IFloorSettings & {
  rooms?: Array<IRoomSettings>;
};
