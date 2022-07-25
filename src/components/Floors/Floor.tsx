import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
} from "../../interfaces";
import { Room } from "../Room/Room";
import cx from "classnames";
import Styles from "./Floor.module.scss";

type IFloor = IDivMainProps & IHouseFloorSettings;

export const Floor: React.FC<IFloor> = ({
  columnCount = 10,
  rowCount = 10,
  title,
  rooms,
  className,
  children,
  ...props
}: IFloor): JSX.Element => {
  const gridStyles: CSS.Properties = {
    height: `${columnCount * 50}px`,
    width: `${rowCount * 50}px`,
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    gridTemplateRows: `repeat(${rowCount}, 1fr)`,
  };
  const myRooms = rooms?.map((room: IRoomSettings) => (
    <Room key={room.id} {...room} />
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
