import React from "react";
import { IHouseFloorSettings } from "../../interfaces";
import { useFloors } from "../../hooks";
import { Floor } from "../";
import Styles from "./FloorsList.module.scss";

export const FloorsList: React.FC = () => {
  const floors = useFloors();

  return (
    <div className={Styles.main}>
      <div className={Styles.list}>
        {floors.map((floor: IHouseFloorSettings) => (
          <Floor key={floor.id} {...floor} />
        ))}
      </div>
    </div>
  );
};
