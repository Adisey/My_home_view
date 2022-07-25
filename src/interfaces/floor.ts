export type IRoomSettings = {
  id: string;
  startRow?: number;
  startCol?: number;
  endRow?: number;
  endCol?: number;
  wallUp?: number;
  wallRight?: number;
  wallDown?: number;
  wallLeft?: number;
  title?: string;
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

export type IHouseSettings = {
  floors?: Array<IHouseFloorSettings>;
};
