//Core
import React from "react";
import Image from "next/image";
import Link from "next/link";
// Other
import { IDivMainProps } from "../../interfaces/div.main.props";
import logo from "../../../public/android-chrome-192x192.png";
//Styles
import cx from "classnames";
import Styles from "./Logo.module.scss";

export const Logo: React.FC<IDivMainProps> = ({
  className,
  ...props
}: IDivMainProps): JSX.Element => {
  return (
    <div {...props} className={cx(Styles.main, className)}>
      <nav>
        <Link href="/">
          <a>
            <Image
              alt="My Home"
              src={logo}
              sizes="50 100 200"
              layout={"responsive"}
              objectFit={"scale-down"}
              objectPosition={"center"}
              quality={90}
              height={80}
              priority
            />
          </a>
        </Link>
      </nav>
    </div>
  );
};
