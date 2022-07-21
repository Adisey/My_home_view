import React from "react";
import { IDivMainProps } from "../../interfaces/div.main.props";
import cx from "classnames";
import Styles from "./Floors.module.scss";
import { Room } from "../Room/Room";

export const Floors1: React.FC<IDivMainProps> = ({
  className,
  ...props
}: IDivMainProps): JSX.Element => {
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.title}>Floor</div>
      <div className={cx(Styles.content, Styles.floor1)}>
        <Room
          startRow={6}
          startCol={1}
          endRow={11}
          endCol={11}
          title={"hall"}
        />
        <Room
          startRow={1}
          startCol={7}
          endRow={6}
          endCol={11}
          wallLeft={15}
          title={"kitchen"}
        />
        <Room
          startRow={1}
          startCol={1}
          endRow={6}
          endCol={7}
          title={"livingRoom"}
        />
      </div>
    </div>
  );
};
