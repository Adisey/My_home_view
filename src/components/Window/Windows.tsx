import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
  IWindowSettings,
} from "../../interfaces";
import { defaultWindow } from "../../settings/appConfig";
import { asNumber } from "../../instrument";
import cx from "classnames";
import Styles from "./Window.module.scss";

type IWindowProps = IDivMainProps & {
  floor: IHouseFloorSettings;
  room: IRoomSettings;
  window?: IWindowSettings;
};

const Window: React.FC<IWindowProps> = ({
  floor,
  room,
  window,
  className,
  children,
  ...props
}: IWindowProps): JSX.Element => {
  const positionStyles = (): CSS.Properties => {
    switch (window?.wallPlace) {
      case "right":
        return {
          right: `${
            (asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1) * -1
          }px`,
          width: `${asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1}px`,
          height: `${asNumber(window?.width)}px`,
          top: `${asNumber(window?.margin)}px`,
        };
      case "down":
        return {
          left: `${asNumber(window?.margin)}px`,
          width: `${asNumber(window?.width)}px`,
          height: `${asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1}px`,
          bottom: `${
            (asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1) * -1
          }px`,
        };
      case "left":
        return {
          left: `${
            (asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1) * -1
          }px`,
          width: `${asNumber(floor.mainWall) + asNumber(room?.wallUp) + 1}px`,
          height: `${asNumber(window?.width)}px`,
          top: `${asNumber(window?.margin)}px`,
        };
      default:
        return {
          left: `${asNumber(window?.margin)}px`,
          width: `${asNumber(window?.width)}px`,
          height: `${asNumber(floor.mainWall) + asNumber(room?.wallUp)}px`,
          top: `${(asNumber(floor.mainWall) + asNumber(room?.wallUp)) * -1}px`,
        };
    }
  };

  return (
    <div
      {...props}
      className={cx(
        Styles.window,
        {
          [Styles.windowHorizontal]:
            window?.wallPlace === "down" || window?.wallPlace === "up",
          [Styles.windowVertical]:
            window?.wallPlace === "left" || window?.wallPlace === "right",
        },
        className
      )}
      style={positionStyles()}
    >
      <div className={Styles.glass1} />
      <div className={Styles.glass2} />
    </div>
  );
};

type IWindowsProps = IDivMainProps & {
  floor: IHouseFloorSettings;
  room: IRoomSettings;
  windows?: IWindowSettings[];
};

export const Windows: React.FC<IWindowsProps> = ({
  floor,
  room,
  className,
  children,
  ...props
}: IWindowsProps): JSX.Element => {
  const myWindows = room?.windows?.map((window: IWindowSettings) => (
    <Window
      key={window.id}
      floor={floor}
      room={room}
      window={{ ...defaultWindow, ...window }}
    />
  ));

  return (
    <div {...props} className={cx(Styles.main, className)}>
      {myWindows}
    </div>
  );
};
