import { ILightStatus } from "./light";

type IRoomPlace = "up" | "down" | "left" | "right";

export type IWidthWalls = {
  wallUp?: number;
  wallRight?: number;
  wallDown?: number;
  wallLeft?: number;
};

export type IWindow = {
  id: string;
  wallPlace: IRoomPlace;
  margin?: number;
  width: number;
};

export type IRoomSettings = ILightStatus &
  IWidthWalls & {
    id: string;
    startRow?: number;
    startCol?: number;
    endRow?: number;
    endCol?: number;
    title?: string;
    windows?: IWindow[];
  };
export type IFloorSettings = {
  id: string;
  columnCount?: number;
  rowCount?: number;
  title?: string;
};

export type IHouseFloorSettings = IFloorSettings & {
  rooms?: Array<IRoomSettings>;
};
