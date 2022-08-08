import React from "react";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
} from "../../interfaces";
import { defaultFloor } from "../../settings/appConfig";
import { asNumber, roomAria } from "../../instrument";
import { Floor } from "../";
import cx from "classnames";
import Styles from "./FloorsList.module.scss";

type IFloorsList = IDivMainProps & {
  floors: IHouseFloorSettings[];
  children?: never;
};

export const FloorsList: React.FC<IFloorsList> = ({
  floors,
  className,
  ...props
}: IFloorsList) => {
  const houseAria = asNumber(
    floors
      .map((floor: IHouseFloorSettings) =>
        floor?.rooms
          ?.map((room: IRoomSettings) => roomAria(room))
          .reduce((s: number, a: number) => s + a)
      )
      .reduce((s?: number, a?: number) => asNumber(s) + asNumber(a))
  ).toFixed(2);

  console.log(Date.now(), "-()->", typeof houseAria, `-houseAria->`, houseAria);
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.floorArea}>All aria: {houseAria}</div>
      <div className={Styles.list}>
        {floors.map((floor: IHouseFloorSettings) => (
          <Floor key={floor.id} floor={{ ...defaultFloor, ...floor }} />
        ))}
      </div>
    </div>
  );
};
