import React from "react";
import { IHouseFloorSettings, myHomeSettings } from "../../settings/myHouse";
import { Floor } from "../";
import Styles from "./FloorsList.module.scss";

export const FloorsList: React.FC = () => {
  const myHome = myHomeSettings.floors
    ?.reverse()
    .map((floor: IHouseFloorSettings) => <Floor {...floor} />);

  return (
    <div className={Styles.main}>
      <div className={Styles.list}>{myHome}</div>
    </div>
  );
};
