export type IFloorsName = "Ground floor" | "First floor" | "Second floor";
export type IRoomsName =
  | "boiler room"
  | "hall"
  | "kitchen"
  | "living room"
  | "bedroom 1"
  | "bedroom 2";

export type IRoomSettings = {
  startRow?: number;
  startCol?: number;
  endRow?: number;
  endCol?: number;
  wallUp?: number;
  wallRight?: number;
  wallDown?: number;
  wallLeft?: number;
  title?: IRoomsName;
};
export type IFloorSettings = {
  columnCount?: number;
  rowCount?: number;
  title?: IFloorsName;
};

export type IHouseFloorSettings = IFloorSettings & {
  rooms?: Array<IRoomSettings>;
};

type IHouseSettings = {
  floors?: Array<IHouseFloorSettings>;
};

export const myHomeSettings: IHouseSettings = {
  floors: [
    {
      title: "Ground floor",
      rowCount: 10,
      columnCount: 10,
      rooms: [
        {
          title: "boiler room",
          startRow: 1,
          startCol: 1,
          endRow: 6,
          endCol: 7,
        },
      ],
    },
    {
      title: "First floor",
      rowCount: 10,
      columnCount: 10,
      rooms: [
        {
          title: "hall",
          startRow: 6,
          startCol: 1,
          endRow: 11,
          endCol: 11,
        },
        {
          title: "kitchen",
          startRow: 1,
          startCol: 7,
          endRow: 6,
          endCol: 11,
          wallLeft: 15,
        },
        {
          title: "living room",
          startRow: 1,
          startCol: 1,
          endRow: 6,
          endCol: 7,
        },
      ],
    },
    {
      title: "Second floor",
      rowCount: 10,
      columnCount: 10,
      rooms: [
        {
          title: "bedroom 1",
          startRow: 1,
          startCol: 1,
          endRow: 6,
          endCol: 5,
        },
        {
          title: "bedroom 2",
          startRow: 1,
          startCol: 7,
          endRow: 6,
          endCol: 11,
        },
      ],
    },
  ],
};
