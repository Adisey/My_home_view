import React from "react";
import Lamp from "./lamp.svg";
import Styles from "./Light.module.scss";

export const Light: React.FC = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.shadow}>
        <Lamp className={Styles.lamp} />
      </div>
    </div>
  );
};
