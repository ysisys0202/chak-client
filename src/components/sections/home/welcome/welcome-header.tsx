import React from "react";
import { Skeleton } from "chak-blocks/plain";
import { getToken } from "@/util/auth";
import { getAuth } from "@/api/auth";
import withSuspense from "@/components/hocs/withSuspense";
import SectionHeader from "@/components/sections/shared/section-header";
import { styles } from "./style.css";

const SuspenseWelcomeHeader = () => {
  return (
    <SectionHeader
      title={
        <div className={styles.sekeletonHeader}>
          <Skeleton width="40px" height="2px" />
          님, 요즘 어떤 책을 읽고 계신가요?
        </div>
      }
    />
  );
};

const WelcomeHeader = async () => {
  const token = await getToken();
  const data = await getAuth({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <SectionHeader
      title={
        <>
          {data.nickname}
          님, 요즘 어떤 책을 읽고 계신가요?
        </>
      }
    />
  );
};

export default withSuspense(WelcomeHeader, <SuspenseWelcomeHeader />);
