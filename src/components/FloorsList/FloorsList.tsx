import React from "react";
import Styles from "./FloorsList.module.scss";
import { Floors1 } from "../Floors/Floors1";
export const FloorsList: React.FC = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.list}>
        <Floors1 className={Styles.flor1} />
        <Floors1 className={Styles.flor2} />
        <Floors1 className={Styles.flor3} />
      </div>
    </div>
  );
};
