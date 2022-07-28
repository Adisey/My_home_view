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
  const depthDoor =
    door?.internalDepth !== undefined
      ? asNumber(door?.internalDepth) + 5
      : asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1;

  const widthDoor = asNumber(door?.width);

  const positionStyles = (): CSS.Properties => {
    switch (door?.wallPlace) {
      case "up":
        return {
          left: `${asNumber(door?.margin)}px`,
          width: `${widthDoor}px`,
          height: `${depthDoor}px`,
          top: `${depthDoor * -1}px`,
        };
      case "right":
        return {
          right: `${
            (asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1) * -1
          }px`,
          width: `${asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1}px`,
          height: `${widthDoor}px`,
          top: `${asNumber(door?.margin)}px`,
        };
      case "left":
        return {
          left: `${
            (asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1) * -1
          }px`,
          width: `${asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1}px`,
          height: `${widthDoor}px`,
          top: `${asNumber(door?.margin)}px`,
        };
      default:
        return {
          left: `${asNumber(door?.margin)}px`,
          width: `${widthDoor}px`,
          height: `${depthDoor - 1}px`,
          bottom: `${(depthDoor - 1) * -1}px`,
        };
    }
  };
  const canvasStyles = (): CSS.Properties => {
    switch (door?.wallPlace) {
      case "right":
        return {};
      case "up":
      case "down":
        const downStyle: CSS.Properties = {
          height: `${asNumber(door.width)}px`,
          width: `${asNumber(door.width)}px`,
        };
        switch (door?.direction) {
          case "rightPull":
            downStyle.top = "-1px";
            downStyle.right = "-1px";
            downStyle.borderTop = "2px solid white";
            downStyle.borderRadius = "0 0 0 100%";
            return downStyle;
          case "rightPush":
            downStyle.bottom = "-1px";
            downStyle.right = "-1px";
            downStyle.borderBottom = "2px solid white";
            downStyle.borderRadius = "0 100% 0 0";
            return downStyle;
          case "leftPush":
            downStyle.bottom = "-1px";
            downStyle.left = "-1px";
            downStyle.borderBottom = "2px solid white";
            downStyle.borderRadius = "100% 0 0 0";
            return downStyle;
          case "leftPull":
            downStyle.top = "-1px";
            downStyle.left = "-1px";
            downStyle.borderTop = "2px solid white";
            downStyle.borderRadius = "0 0 100% 0";
            return downStyle;
          default:
            downStyle.height = `${depthDoor}px`;
            downStyle.border = "2px solid #c3f6fc";
            downStyle.top = "-2px";
            downStyle.width = `${widthDoor - 4}px`;
            downStyle.backgroundColor = "#c3f6fc";
            return downStyle;
        }
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
      <div className={Styles.doorsCanvas} style={canvasStyles()}>
        <div>
          id-{door?.id} wallPlace-{door?.wallPlace} direction-{door?.direction}{" "}
          internalDepth-{door?.internalDepth}
        </div>
      </div>
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
