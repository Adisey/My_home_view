import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { IHouseFloorSettings } from "../interfaces";
import { useFloors } from "../hooks";
import { withLayout } from "../layout/Layout";
import { getFloors } from "../middleware";
import { FloorsList } from "../components";
import mainStyles from "../styles/main.module.scss";

interface IHomeProps {
  floors?: IHouseFloorSettings[];
}

const Home: NextPage<IHomeProps> = (props: IHomeProps) => {
  const floors = useFloors();
  return (
    <div className={mainStyles.main}>
      <Head>
        <title>My Home</title>
      </Head>
      <FloorsList floors={floors.length ? floors : props.floors || []} />
    </div>
  );
};

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const floors = getFloors();
  return { props: { floors } };
};
