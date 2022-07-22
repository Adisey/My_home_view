import React from "react";
import { IDivMainProps } from "../../interfaces/div.main.props";
import Lamp from "./lamp.svg";
import cx from "classnames";
import Styles from "./Light.module.scss";
import { IRoomsName } from "../../settings/myHouse";
import { useLightsStore } from "../../hooks";

interface ILight extends IDivMainProps {
  title?: IRoomsName;
}

export const Light: React.FC<ILight> = ({
  title,
  className,
  ...props
}: ILight): JSX.Element => {
  const { isLight, setLightRoom } = useLightsStore(title);

  const lampClick = (): void => {
    setLightRoom(title, !isLight);
  };

  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div
        className={cx(
          Styles.lampPlace,
          isLight ? Styles.shadowOn : Styles.shadowOff
        )}
      >
        <Lamp className={Styles.lamp} onClick={lampClick} />
      </div>
    </div>
  );
};
