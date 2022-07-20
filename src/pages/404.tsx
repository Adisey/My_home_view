import React, { useEffect } from "react";
import { withLayout } from "../layout/Layout";
import { useRouter } from "next/router";

export function Error404(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <>
      <h3>Loading...</h3>
    </>
  );
}

export default withLayout(Error404);
