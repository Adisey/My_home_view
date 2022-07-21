import React from "react";
import { Floor, Room } from "../";
import Styles from "./FloorsList.module.scss";

export const FloorsList: React.FC = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.list}>
        <Floor rowCount={10} columnCount={10} title={"Second floor"}>
          <Room
            startRow={1}
            startCol={1}
            endRow={6}
            endCol={5}
            title={"bedroom"}
          />
          <Room
            startRow={1}
            startCol={7}
            endRow={6}
            endCol={11}
            title={"bedroom"}
          />
        </Floor>
        <Floor rowCount={10} columnCount={10} title={"First floor"}>
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
        </Floor>
        <Floor title={"Ground floor"}>
          <Room
            startRow={1}
            startCol={1}
            endRow={6}
            endCol={7}
            title={"boiler room"}
          />
        </Floor>
      </div>
    </div>
  );
};
