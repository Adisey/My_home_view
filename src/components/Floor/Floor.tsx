import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
} from "../../interfaces";
import { appConfig, defaultRoom } from "../../settings/appConfig";
import { asNumber } from "../../instrument";
import { Room } from "../Room/Room";
import cx from "classnames";
import Styles from "./Floor.module.scss";

type IFloor = IDivMainProps & {
  floor: IHouseFloorSettings;
};

export const Floor: React.FC<IFloor> = ({
  floor,
  className,
  children,
  ...props
}: IFloor): JSX.Element => {
  const { title, length, width, mainWall, rooms } = floor;
  const gridStyles: CSS.Properties = {
    height: `${length}px`,
    width: `${width}px`,
    gridTemplateColumns: `repeat(${length}, 1fr)`,
    gridTemplateRows: `repeat(${width}, 1fr)`,
    padding: `${asNumber(mainWall) - appConfig.internalWall / 2}px`,
  };
  const myRooms = rooms?.map((room: IRoomSettings) => (
    <Room key={room.id} room={{ ...defaultRoom, ...room }} floor={floor} />
  ));

  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.title}>{title}</div>
      <div className={Styles.content} style={gridStyles}>
        {myRooms}
        {children}
      </div>
    </div>
  );
};
