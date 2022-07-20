//Core
import React from "react";
//Other
import { IDivMainProps } from "../../interfaces/div.main.props";
//Styles
import cx from "classnames";
import Styles from "./Footer.module.scss";

export const Footer: React.FC<IDivMainProps> = ({
  className,
  ...props
}: IDivMainProps): JSX.Element => {
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.leftPlace}>footer 1</div>
      <div className={Styles.centerPlace}>footer 2</div>
      <div className={Styles.rightPlace}>footer 3</div>
    </div>
  );
};
