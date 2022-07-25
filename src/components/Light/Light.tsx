import React from "react";
import { IDivMainProps } from "../../interfaces/";
import { IRoomsName } from "../../settings/myHouse";
import { useIsLight } from "../../hooks";
import { lightOff, lightOn } from "../../middleware";
import Lamp from "./lamp.svg";
import cx from "classnames";
import Styles from "./Light.module.scss";

interface ILight extends IDivMainProps {
  title?: IRoomsName;
}

export const Light: React.FC<ILight> = ({
  title,
  className,
  ...props
}: ILight): JSX.Element => {
  const isLight = useIsLight(title);

  const lampClick = (): void => {
    !!title && (isLight ? lightOff(title) : lightOn(title));
  };
  console.log(Date.now(), "--(RENDER Light)->", title, `-isL->`, isLight);

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
