import { IHouseFloorSettings, IHouseSettings } from "../interfaces";

export const myHomeFloors: Array<IHouseFloorSettings> = [
  {
    id: "0",
    title: "Ground floor",
    rowCount: 10,
    columnCount: 10,
    rooms: [
      {
        id: "0-01",
        title: "boiler room",
        startRow: 1,
        startCol: 1,
        endRow: 6,
        endCol: 7,
      },
    ],
  },
  {
    id: "1",
    title: "First floor",
    rowCount: 10,
    columnCount: 10,
    rooms: [
      {
        id: "1-01",
        title: "hall",
        startRow: 6,
        startCol: 1,
        endRow: 11,
        endCol: 11,
      },
      {
        id: "1-02",
        title: "kitchen",
        startRow: 1,
        startCol: 7,
        endRow: 6,
        endCol: 11,
        wallLeft: 15,
      },
      {
        id: "1-03",
        title: "living room",
        startRow: 1,
        startCol: 1,
        endRow: 6,
        endCol: 7,
      },
    ],
  },
  {
    id: "2",
    title: "Second floor",
    rowCount: 10,
    columnCount: 10,
    rooms: [
      {
        id: "2-01",
        title: "bedroom 1",
        startRow: 1,
        startCol: 1,
        endRow: 6,
        endCol: 5,
      },
      {
        id: "2-02",
        title: "bedroom 2",
        startRow: 1,
        startCol: 7,
        endRow: 6,
        endCol: 11,
      },
    ],
  },
];
