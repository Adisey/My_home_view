import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
  IRoomSettingsWithWall,
} from "../../interfaces";
import { asNumber } from "../../instrument";
import { Light, Stairs, WallHoles } from "../";
import cx from "classnames";
import Styles from "./Room.module.scss";
import { appConfig } from "../../settings/appConfig";

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
  const { extendWall, internalWall } = floor;
  const lineDepth: number = appConfig.wallLineDepth;

  const numberExtendWall = extendWall
    ? asNumber(extendWall)
    : appConfig.extendWall;

  const numberStartX: number = asNumber(startX) - lineDepth;
  const numberEndX: number = asNumber(startX) + asNumber(lengthX) + lineDepth;
  const numberStartY: number = asNumber(startY) - lineDepth;
  const numberEndY: number = asNumber(startY) + asNumber(lengthY) + lineDepth;

  const numberLengthX: number = asNumber(lengthX);
  const numberLengthY: number = asNumber(lengthY);

  const numberWallUp: number = wallUp ? asNumber(wallUp) : numberExtendWall;
  const numberWallLeft: number = wallLeft
    ? asNumber(wallLeft)
    : numberExtendWall;
  const numberWallDown: number = wallDown
    ? asNumber(wallDown)
    : numberExtendWall;
  const numberWallRight: number = wallRight
    ? asNumber(wallRight)
    : numberExtendWall;

  const roomWithCalcWall: IRoomSettingsWithWall = {
    ...room,
    wallUp: numberWallUp,
    wallLeft: numberWallLeft,
    wallDown: numberWallDown,
    wallRight: numberWallRight,
  };

  const positionStyles: CSS.Properties = {
    gridRowStart: numberWallLeft + numberStartY,
    gridRowEnd: numberWallLeft + numberEndY,
    gridColumnStart: numberWallUp + numberStartX,
    gridColumnEnd: numberWallUp + numberEndX,
    borderWidth: `${lineDepth}px`,
  };

  const aria = (numberLengthX * numberLengthY) / 10000;

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
        <WallHoles floor={floor} room={roomWithCalcWall} />
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
