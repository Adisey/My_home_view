import React from "react";
import { IDivMainProps, ILightStatus } from "../../interfaces/";
import { useIsLight } from "../../hooks";
import { lightOff, lightOn } from "../../middleware";
import Image from "next/image";
import lampRed from "./lampRed.png";
import lampBlack from "./lampBlack.png";
import lampGray from "./lampGray.png";
import cx from "classnames";
import Styles from "./Light.module.scss";

type ILight = IDivMainProps & ILightStatus;

export const Light: React.FC<ILight> = ({
  id,
  isLightActive,
  isLightHide,
  className,
  ...props
}: ILight): JSX.Element => {
  const isLight = useIsLight(id);

  const lampClick = (): void => {
    !!id && isLightActive && (isLight ? lightOff(id) : lightOn(id));
  };

  console.log(
    Date.now(),
    `--(LAMP)-  ->`,
    id,
    "isActive ->",
    isLightActive,
    "isHide ->",
    isLightHide
  );
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <div
        className={cx(
          Styles.lampPlace,
          isLight ? Styles.shadowOn : Styles.shadowOff
        )}
        title={isLight ? "lamp Off" : "lamp On"}
      >
        {isLightHide ? null : (
          <Image
            src={isLightActive ? (isLight ? lampRed : lampBlack) : lampGray}
            onClick={lampClick}
            priority
          />
        )}
      </div>
    </div>
  );
};
