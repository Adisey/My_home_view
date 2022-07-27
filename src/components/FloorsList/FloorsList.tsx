import React from "react";
import { IDivMainProps, IHouseFloorSettings } from "../../interfaces";
import { defaultFloor } from "../../settings/appConfig";
import { Floor } from "../";
import cx from "classnames";
import Styles from "./FloorsList.module.scss";

type IFloorsList = IDivMainProps & {
  floors: IHouseFloorSettings[];
  children?: never;
};

export const FloorsList: React.FC<IFloorsList> = ({
  floors,
  className,
  ...props
}: IFloorsList) => {
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div className={Styles.list}>
        {floors.map((floor: IHouseFloorSettings) => (
          <Floor key={floor.id} floor={{ ...defaultFloor, ...floor }} />
        ))}
      </div>
    </div>
  );
};
