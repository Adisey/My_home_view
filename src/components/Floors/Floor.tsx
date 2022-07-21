import React from "react";
import CSS from "csstype";
import { IDivMainProps } from "../../interfaces/div.main.props";
import cx from "classnames";
import Styles from "./Floor.module.scss";

interface IFloor extends IDivMainProps {
  columnCount?: number;
  rowCount?: number;
  title?: string;
}

export const Floor: React.FC<IFloor> = ({
  columnCount = 10,
  rowCount = 10,
  title,
  className,
  children,
  ...props
}: IFloor): JSX.Element => {
  const gridStyles: CSS.Properties = {
    height: `${columnCount * 50}px`,
    width: `${rowCount * 50}px`,
    gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
    gridTemplateRows: `repeat(${rowCount}, 1fr)`,
  };
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.title}>{title}</div>
      <div className={Styles.content} style={gridStyles}>
        {children}
      </div>
    </div>
  );
};
