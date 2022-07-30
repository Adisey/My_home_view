import React, { ReactNode } from "react";
import { IDivMainProps, IRoomSettings } from "../../interfaces";
import cx from "classnames";
import Styles from "./Stairs.module.scss";
import { asNumber } from "../../instrument";

type IStairs = IDivMainProps & {
  room: IRoomSettings;
};

export const Stairs: React.FC<IStairs> = ({
  room,
  className,
  ...props
}: IStairs): JSX.Element | null => {
  const { stairs, lengthX, lengthY } = room;
  if (stairs !== undefined) {
    const stairsCount =
      asNumber(stairs === "up" || stairs === "down" ? lengthY : lengthX) / 25;

    console.log(Date.now(), `--(Stairs)-  ->`, room.title, stairs, stairsCount);
    const aaa: ReactNode[] = [];

    for (let s = 1; s <= stairsCount; s++) {
      aaa.push(
        <div key={s} className={Styles.stair}>
          <div className={Styles.line}></div>
          {s}
        </div>
      );
    }

    return (
      <div {...props} className={cx(Styles.main, className)}>
        <div
          className={cx(Styles[stairs], {
            [Styles.vertical]: stairs === "up" || stairs === "down",
            [Styles.horizontal]: stairs === "left" || stairs === "right",
          })}
        >
          {aaa}
        </div>
      </div>
    );
  } else {
    return null;
  }
};
