import React from "react";
import CSS from "csstype";
import { IDivMainProps } from "../../interfaces/div.main.props";
import cx from "classnames";
import Styles from "./Room.module.scss";

interface IRoom extends IDivMainProps {
  startRow?: number;
  startCol?: number;
  endRow?: number;
  endCol?: number;
  wallUp?: number;
  wallRight?: number;
  wallDown?: number;
  wallLeft?: number;
  title?: string;
}

export const Room: React.FC<IRoom> = ({
  startRow = 1,
  startCol = 1,
  endRow = 1,
  endCol = 1,
  wallUp = 5,
  wallRight = 5,
  wallDown = 5,
  wallLeft = 5,
  title,
  className,
  children,
  ...props
}: IRoom): JSX.Element => {
  const positionStyles: CSS.Properties = {
    gridRowStart: startRow,
    gridColumnStart: startCol,
    gridRowEnd: endRow,
    gridColumnEnd: endCol,
    paddingTop: `${wallUp}px`,
    paddingRight: `${wallRight}px`,
    paddingBottom: `${wallDown}px`,
    paddingLeft: `${wallLeft}px`,
  };

  return (
    <div
      {...props}
      className={cx(Styles.main, className)}
      style={positionStyles}
    >
      <div title={title} className={Styles.title}>
        {title}
      </div>
      <div className={Styles.covering}>{children}</div>
    </div>
  );
};
