import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import { promises as fs } from "fs";
import path from "path";
import Head from "next/head";
import { appConfig } from "../settings/appConfig";
import { IHouseFloorSettings } from "../interfaces";
import { useFloors } from "../hooks";
import { withLayout } from "../layout/Layout";
import { isTrue } from "../instrument";
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
  const { publicFile } = appConfig;
  const isLocal = isTrue(process?.env?.NEXT_PUBLIC_IS_LOCAL);

  if (isLocal) {
    const localFile = process?.env?.NEXT_PUBLIC_LOCAL_FILE;

    const fileName = isLocal && !!localFile ? localFile : publicFile;
    const filePath = path.join(process.cwd(), fileName);
    const jsonData = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);
    return { props: { floors: data } };
  } else {
    const floors = getFloors();
    return { props: { floors } };
  }
};
