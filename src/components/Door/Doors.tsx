import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IDoorSettings,
  IHouseFloorSettings,
  IRoomSettings,
} from "../../interfaces";
import { defaultDoor } from "../../settings/appConfig";
import { asNumber } from "../../instrument";
import cx from "classnames";
import Styles from "./Door.module.scss";

type IWindowProps = IDivMainProps & {
  floor: IHouseFloorSettings;
  room: IRoomSettings;
  door?: IDoorSettings;
};

const Door: React.FC<IWindowProps> = ({
  floor,
  room,
  door,
  className,
  children,
  ...props
}: IWindowProps): JSX.Element => {
  console.log(Date.now(), "-(Door)->", room?.title, `-+->`, door);
  const positionStyles = (): CSS.Properties => {
    switch (door?.wallPlace) {
      case "right":
        return {
          right: `${
            (asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1) * -1
          }px`,
          width: `${asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1}px`,
          height: `${asNumber(door?.width)}px`,
          top: `${asNumber(door?.margin)}px`,
        };
      case "down":
        const height =
          door?.internalDepth !== undefined
            ? asNumber(door?.internalDepth)
            : asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1;
        return {
          left: `${asNumber(door?.margin)}px`,
          width: `${asNumber(door?.width)}px`,
          height: `${height}px`,
          bottom: `${height * -1}px`,
        };
      case "left":
        return {
          left: `${
            (asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1) * -1
          }px`,
          width: `${asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1}px`,
          height: `${asNumber(door?.width)}px`,
          top: `${asNumber(door?.margin)}px`,
        };
      default:
        return {
          left: `${asNumber(door?.margin)}px`,
          width: `${asNumber(door?.width)}px`,
          height: `${asNumber(floor.mainWall) + asNumber(room?.wallUp)}px`,
          top: `${(asNumber(floor.mainWall) + asNumber(room?.wallUp)) * -1}px`,
        };
    }
  };
  const canvasStyles = (): CSS.Properties => {
    switch (door?.wallPlace) {
      case "right":
        return {};
      case "down":
        return door?.direction === "right"
          ? {
              top: "0",
              right: "-1px",
              height: `${asNumber(door.width)}px`,
              width: `${asNumber(door.width)}px`,
              borderTop: "2px solid white",
              borderRadius: "0 0 0 100%",
            }
          : door?.direction === "left"
          ? {
              top: "0",
              left: "-1px",
              height: `${asNumber(door.width)}px`,
              width: `${asNumber(door.width)}px`,
              borderTop: "2px solid white",
              borderRadius: "0 0 100%",
            }
          : {};
      case "left":
        return {};
      default:
        return {};
    }
  };

  return (
    <div
      {...props}
      className={cx(
        Styles.door,
        {
          [Styles.doorHorizontal]:
            door?.wallPlace === "down" || door?.wallPlace === "up",
          [Styles.doorVertical]:
            door?.wallPlace === "left" || door?.wallPlace === "right",
        },
        className
      )}
      style={positionStyles()}
    >
      <div className={Styles.doorsCanvas} style={canvasStyles()} />
    </div>
  );
};

type IDoorsProps = IDivMainProps & {
  floor: IHouseFloorSettings;
  room: IRoomSettings;
};

export const Doors: React.FC<IDoorsProps> = ({
  floor,
  room,
  className,
  children,
  ...props
}: IDoorsProps): JSX.Element => {
  const myDoors = room.doors?.map((door: IDoorSettings) => (
    <Door
      key={door.id}
      floor={floor}
      room={room}
      door={{ ...defaultDoor, ...door }}
    />
  ));

  return (
    <div {...props} className={cx(Styles.main, className)}>
      {myDoors}
    </div>
  );
};
