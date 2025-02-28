import React from "react";
import Dimmed from "@/components/shared/dimmed/dimmed";
import LoadingSpinner from "@/components/shared/loading/loading-spinner";
import { styles } from "./full-screen-loader.css";
import { combineClassNames } from "@/util/common";

const FullScreenLoader = ({ className }: { className?: string }) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <Dimmed className={classNames}>
      <LoadingSpinner />
    </Dimmed>
  );
};

export default FullScreenLoader;
