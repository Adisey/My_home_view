import { IRoomSettings } from "../interfaces";

type IAsNumberValue = string | number | undefined;

export const asNumber = (value: IAsNumberValue): number => {
  const numValue = Number(value);
  return isNaN(numValue) ? 0 : numValue;
};

export const upperFirsLetter = (value = ""): string => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

type IShowDoubleId = {
  id: any;
};

export const showDoubleId = (arr: IShowDoubleId[]): void => {
  const foundIds: any[] = [];
  arr.forEach((a: IShowDoubleId) => {
    const id = a.id;
    if (foundIds.includes(id)) {
      console.error("Double Id->", id, "obj->", a);
    }
    foundIds.push(id);
  });
};

type IValueTrue = boolean | string | number | undefined;

export const isTrue = (value: IValueTrue): boolean => {
  const varsTrue: IValueTrue[] = [
    true,
    "True",
    "true",
    "T",
    "t",
    1,
    "1",
    "Y",
    "y",
    "Yes",
    "yes",
  ];

  return varsTrue.includes(value);
};

export const roomAria = (room: IRoomSettings): number => {
  return (asNumber(room.lengthX) * asNumber(room.lengthY)) / 10000;
};
