import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
} from "../../interfaces";
import { Light, Stairs, WallHoles } from "../";
import cx from "classnames";
import Styles from "./Room.module.scss";
import { asNumber } from "../../instrument";

type IRoomProps = IDivMainProps & {
  floor: IHouseFloorSettings;
  room: IRoomSettings;
};

export const Room: React.FC<IRoomProps> = ({
  floor,
  room,
  className,
  children,
  ...props
}: IRoomProps): JSX.Element => {
  const {
    id,
    startX,
    startY,
    lengthX,
    lengthY,
    wallUp,
    wallRight,
    wallDown,
    wallLeft,
    title,
    isLightActive,
    isLightHide,
  } = room;
  const numberStartX = asNumber(startX);
  const numberStartY = asNumber(startY);
  const numberLengthX = asNumber(lengthX);
  const numberLengthY = asNumber(lengthY);
  const numberWallUp = asNumber(wallUp);
  const numberWallRight = asNumber(wallRight);
  const numberWallDown = asNumber(wallDown);
  const numberWallLeft = asNumber(wallLeft);
  const positionStyles: CSS.Properties = {
    gridRowStart: numberStartY + 1,
    gridColumnStart: numberStartX + 1,
    gridRowEnd: numberStartY + numberLengthY,
    gridColumnEnd: numberStartX + numberLengthX,
    paddingTop: `${numberWallUp}px`,
    paddingRight: `${numberWallRight}px`,
    paddingBottom: `${numberWallDown}px`,
    paddingLeft: `${numberWallLeft}px`,
  };

  const aria =
    ((numberLengthX - numberWallRight - numberWallRight) *
      (numberLengthY - numberWallUp - numberWallDown)) /
    10000;

  return (
    <div
      {...props}
      className={cx(Styles.main, className)}
      style={positionStyles}
    >
      <div title={title} className={Styles.title}>
        {title} ({aria} m<sup>2</sup>)
      </div>
      <div className={Styles.covering}>
        <Stairs room={room} />
        <WallHoles floor={floor} room={room} />
        <Light
          id={id}
          isLightActive={isLightActive}
          isLightHide={isLightHide}
        />
        {children}
      </div>
    </div>
  );
};
