import React from "react";
import { IDivMainProps } from "../../interfaces/div.main.props";
import cx from "classnames";
import Styles from "./Floors.module.scss";

export const Floors1: React.FC<IDivMainProps> = ({
  className,
  ...props
}: IDivMainProps): JSX.Element => {
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.title}>Floor</div>
      <div className={cx(Styles.content, Styles.floor1)}>
        <div className={Styles.hall}>
          <div className={Styles.sss} />
        </div>
        <div className={Styles.kitchen}>
          <div className={Styles.sss} />
        </div>
        <div className={Styles.livingRoom}>
          <div className={Styles.sss} />
        </div>
      </div>
    </div>
  );
};
