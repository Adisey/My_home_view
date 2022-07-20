//Core
import React from "react";
//Other
import { Logo } from "../../components";
import { IDivMainProps } from "../../interfaces/div.main.props";
//Styles
import cx from "classnames";
import Styles from "./Header.module.scss";

export const Header: React.FC<IDivMainProps> = ({
  className,
  ...props
}: IDivMainProps): JSX.Element => {
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.logoPlace}>
        <Logo />
      </div>
      <div className={Styles.titlePlace}>My Home</div>
      <div className={Styles.rightPlace}>
        <a href="#">login</a>
      </div>
    </div>
  );
};
