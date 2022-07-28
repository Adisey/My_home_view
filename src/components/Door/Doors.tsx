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
  const margin = asNumber(door?.margin);
  const width = asNumber(door?.width);
  const widthRoomWall =
    door?.wallPlace === "up"
      ? asNumber(room?.wallUp)
      : door?.wallPlace === "down"
      ? asNumber(room?.wallDown)
      : door?.wallPlace === "left"
      ? asNumber(room?.wallLeft)
      : door?.wallPlace === "right"
      ? asNumber(room?.wallRight)
      : 0;
  const depth =
    door?.internalDepth !== undefined
      ? asNumber(door?.internalDepth) + 5
      : asNumber(floor.mainWall) + widthRoomWall + 1;
  const lineWhite = "2px solid white";
  const radius = {
    UL: "100% 0 0 0",
    UR: "0 100% 0  0",
    DR: "0 0 100% 0",
    DL: "0 0 0 100%",
  };

  const positionStyles = (): CSS.Properties => {
    switch (door?.wallPlace) {
      case "up":
        return {
          left: `${margin}px`,
          width: `${width}px`,
          height: `${depth}px`,
          top: `${depth * -1}px`,
        };
      case "right":
        return {
          right: `${depth * -1}px`,
          width: `${depth}px`,
          height: `${width}px`,
          top: `${margin}px`,
        };
      case "left":
        return {
          left: `${depth * -1}px`,
          width: `${depth}px`,
          height: `${width}px`,
          top: `${margin}px`,
        };
      default:
        return {
          left: `${margin}px`,
          width: `${width}px`,
          height: `${depth}px`,
          bottom: `${depth * -1}px`,
        };
    }
  };
  const canvasStyles = (): CSS.Properties => {
    const downStyle: CSS.Properties = {
      height: `${width}px`,
      width: `${width}px`,
    };

    switch (door?.wallPlace) {
      case "up":
        downStyle.left = "-2px";
        switch (door?.direction) {
          case "rightPull":
            downStyle.top = "50%";
            downStyle.borderTop = lineWhite;
            downStyle.borderRadius = radius.DL;
            return downStyle;
          case "rightPush":
            downStyle.bottom = "50%";
            downStyle.borderBottom = lineWhite;
            downStyle.borderRadius = radius.UL;
            return downStyle;
          case "leftPush":
            downStyle.bottom = "50%";
            downStyle.borderBottom = lineWhite;
            downStyle.borderRadius = radius.UR;
            return downStyle;
          case "leftPull":
            downStyle.top = "50%";
            downStyle.borderTop = lineWhite;
            downStyle.borderRadius = radius.DR;
            return downStyle;
          default:
            downStyle.display = "none";
            return downStyle;
        }
      case "down":
        downStyle.left = "-2px";
        switch (door?.direction) {
          case "rightPull":
            downStyle.bottom = "50%";
            downStyle.borderBottom = lineWhite;
            downStyle.borderRadius = radius.UR;
            return downStyle;
          case "rightPush":
            downStyle.top = "50%";
            downStyle.borderTop = lineWhite;
            downStyle.borderRadius = radius.DR;
            return downStyle;
          case "leftPush":
            downStyle.top = "50%";
            downStyle.borderTop = lineWhite;
            downStyle.borderRadius = radius.DL;
            return downStyle;
          case "leftPull":
            downStyle.bottom = "50%";
            downStyle.borderBottom = lineWhite;
            downStyle.borderRadius = radius.UL;

            return downStyle;
          default:
            downStyle.display = "none";
            return downStyle;
        }
      case "right":
        downStyle.top = "-2px";
        switch (door?.direction) {
          case "rightPush":
            downStyle.left = "50%";
            downStyle.borderLeft = lineWhite;
            downStyle.borderRadius = radius.UR;
            return downStyle;
          case "rightPull":
            downStyle.right = "50%";
            downStyle.borderRight = lineWhite;
            downStyle.borderRadius = radius.UL;
            return downStyle;
          case "leftPush":
            downStyle.left = "50%";
            downStyle.borderLeft = lineWhite;
            downStyle.borderRadius = radius.DR;
            return downStyle;
          case "leftPull":
            downStyle.right = "50%";
            downStyle.borderRight = lineWhite;
            downStyle.borderRadius = radius.DL;
            return downStyle;
          default:
            downStyle.display = "none";
            return downStyle;
        }
      case "left":
        downStyle.top = "-2px";
        switch (door?.direction) {
          case "rightPush":
            downStyle.right = "50%";
            downStyle.borderRight = lineWhite;
            downStyle.borderRadius = radius.UL;
            return downStyle;
          case "rightPull":
            downStyle.left = "50%";
            downStyle.borderLeft = lineWhite;
            downStyle.borderRadius = radius.UR;
            return downStyle;
          case "leftPush":
            downStyle.right = "50%";
            downStyle.borderRight = lineWhite;
            downStyle.borderRadius = radius.DL;
            return downStyle;
          case "leftPull":
            downStyle.left = "50%";
            downStyle.borderLeft = lineWhite;
            downStyle.borderRadius = radius.DR;
            return downStyle;
          default:
            downStyle.display = "none";
            return downStyle;
        }

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
