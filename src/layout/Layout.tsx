import React, { FC, ReactNode } from "react";
import { Header } from "./Header/Header";
import Styles from "./Layout.module.scss";
import { Footer } from "./Footer/Footer";

export interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={Styles.mainWrapper}>
      <Header className={Styles.header} />
      <div className={Styles.content}>{children}</div>
      <Footer className={Styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
