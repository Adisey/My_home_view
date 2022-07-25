//Core
import React from "react";
//Other
import { Logo } from "../../components";
import { IDivMainProps } from "../../interfaces";
import { fetchInitData } from "../../middleware";
//Styles
import cx from "classnames";
import Styles from "./Header.module.scss";

export const Header: React.FC<IDivMainProps> = ({
  className,
  ...props
}: IDivMainProps): JSX.Element => {
  const onClick = () => {
    fetchInitData();
  };
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.logoPlace}>
        <Logo />
      </div>
      <div className={Styles.titlePlace}>My Home</div>
      <div className={Styles.rightPlace}>
        <a href="#" onClick={onClick}>
          login
        </a>
      </div>
    </div>
  );
};
