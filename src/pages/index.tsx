import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { withLayout } from "../layout/Layout";
import { FloorsList } from "../components";
import mainStyles from "../styles/main.module.scss";

const Home: NextPage = () => {
  return (
    <div className={mainStyles.main}>
      <Head>
        <title>My Home</title>
      </Head>
      <FloorsList />
    </div>
  );
};

export default withLayout(Home);
