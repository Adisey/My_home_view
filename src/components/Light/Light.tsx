import React from "react";
import { IDivMainProps } from "../../interfaces/";
import { useIsLight } from "../../hooks";
import { lightOff, lightOn } from "../../middleware";
import Image from "next/image";
import lampRed from "./lampRed.png";
import lampBlack from "./lampBlack.png";
import cx from "classnames";
import Styles from "./Light.module.scss";

interface ILight extends IDivMainProps {
  id?: string;
}

export const Light: React.FC<ILight> = ({
  id,
  className,
  ...props
}: ILight): JSX.Element => {
  const isLight = useIsLight(id);

  const lampClick = (): void => {
    !!id && (isLight ? lightOff(id) : lightOn(id));
  };

  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div
        className={cx(
          Styles.lampPlace,
          isLight ? Styles.shadowOn : Styles.shadowOff
        )}
        title={isLight ? "lamp Off" : "lamp On"}
      >
        <Image src={isLight ? lampRed : lampBlack} onClick={lampClick} />
      </div>
    </div>
  );
};
