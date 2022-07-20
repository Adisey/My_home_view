import React from "react";
import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import mainStyles from "../styles/main.module.scss";
import Head from "next/head";
import { FloorsList } from "../components/FloorsList/FloorsList";

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
