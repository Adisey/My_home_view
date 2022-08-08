import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
} from "../../interfaces";
import { appConfig, defaultRoom } from "../../settings/appConfig";
import { asNumber, roomAria } from "../../instrument";
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
  const { title, lengthY, lengthX, rooms } = floor;
  const marginLength: number = appConfig.wallLineDepth * 2;

  const externalWallStyles: CSS.Properties = {
    borderWidth: `${appConfig.wallLineDepth}px`,
  };

  const numberLengthY: number = asNumber(lengthY);
  const numberLengthX: number = asNumber(lengthX);

  const floorGridStyles: CSS.Properties = {
    height: `${numberLengthY - marginLength}px`,
    width: `${numberLengthX - marginLength}px`,
    gridTemplateColumns: `repeat(${numberLengthX - marginLength}, 1fr)`,
    gridTemplateRows: `repeat(${numberLengthY - marginLength}, 1fr)`,
    margin: 0,
  };
  const myRooms = rooms?.map((room: IRoomSettings) => (
    <Room key={room.id} room={{ ...defaultRoom, ...room }} floor={floor} />
  ));

  const floorAria = rooms
    ?.map((room: IRoomSettings) => roomAria(room))
    .reduce((s: number, a: number) => s + a)
    .toFixed(2);

  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.title}>
        {title} ({floorAria} m<sup>2</sup>)
      </div>
      <div className={Styles.content}>
        <div className={Styles.externalWall} style={externalWallStyles}>
          <div className={Styles.floor} style={floorGridStyles}>
            {myRooms}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
