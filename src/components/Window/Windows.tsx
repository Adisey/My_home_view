import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
  IWindow,
} from "../../interfaces";
import { defaultWindow } from "../../settings/appConfig";
import { asNumber } from "../../instrument";
import cx from "classnames";
import Styles from "./Window.module.scss";

type IWindowProps = IDivMainProps & {
  floor: IHouseFloorSettings;
  room: IRoomSettings;
  window?: IWindow;
};

const Window: React.FC<IWindowProps> = ({
  floor,
  room,
  window,
  className,
  children,
  ...props
}: IWindowProps): JSX.Element => {
  const positionStyles: CSS.Properties = {
    left: `${window?.margin || 0}px`,
    width: `${window?.width || 0}px`,
    height: `${asNumber(floor.mainWall) + asNumber(room?.wallUp)}px`,
    top: `${-(asNumber(floor.mainWall) + asNumber(room?.wallUp))}px`,
  };

  return (
    <div
      {...props}
      className={cx(Styles.window, Styles.windowHorizontal, className)}
      style={positionStyles}
    >
      <div className={Styles.glass} />
    </div>
  );
};

type IWindowsProps = IDivMainProps & {
  floor: IHouseFloorSettings;
  room: IRoomSettings;
  windows?: IWindow[];
};

export const Windows: React.FC<IWindowsProps> = ({
  floor,
  room,
  windows,
  className,
  children,
  ...props
}: IWindowsProps): JSX.Element => {
  const myWindows = windows?.map((window: IWindow) => (
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
