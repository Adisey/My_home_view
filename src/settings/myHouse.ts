export type IRoomSettings = {
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
  columnCount?: number;
  rowCount?: number;
  title?: string;
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
          endRow: 10,
          endCol: 10,
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
          title: "kitchen",
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
