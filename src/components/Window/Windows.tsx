import React from "react";
import CSS from "csstype";
import {
  IDivMainProps,
  IHouseFloorSettings,
  IRoomSettings,
  IWidthWalls,
  IWindow,
} from "../../interfaces";
import cx from "classnames";
import Styles from "./Window.module.scss";

type IWindowProps = IDivMainProps & {
  walls?: IWidthWalls;
  window?: IWindow;
};

const Window: React.FC<IWindowProps> = ({
  walls,
  window,
  className,
  children,
  ...props
}: IWindowProps): JSX.Element => {
  const positionStyles: CSS.Properties = {
    left: `${window?.margin || 0}px`,
    width: `${window?.width || 0}px`,
    height: `${15 + (walls?.wallUp || 0) + 2}px`,
    top: `${-(15 + (walls?.wallUp || 0) + 3)}px`,
  };

  return (
    <div
      {...props}
      className={cx(Styles.window, className)}
      style={positionStyles}
    >
      <div className={Styles.glass} />
    </div>
  );
};

type IWindowsProps = IDivMainProps & {
  walls?: IWidthWalls;
  windows?: IWindow[];
};

export const Windows: React.FC<IWindowsProps> = ({
  walls,
  windows,
  className,
  children,
  ...props
}: IWindowsProps): JSX.Element => {
  const myWindows = windows?.map((window: IWindow) => (
    <Window key={window.id} walls={walls} window={window} />
  ));

  return (
    <div {...props} className={cx(Styles.main, className)}>
      {myWindows}
    </div>
  );
};
