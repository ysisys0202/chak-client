import React from "react";
import { Skeleton } from "chak-blocks/plain";
import { getAuthServer } from "@/api/server/auth";
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
  const data = await getAuthServer();
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
