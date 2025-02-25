import { combineClassNames } from "@/util/common";
import { Typography } from "chak-blocks/plain";
import React from "react";
import { styles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const RecordViewerTitle = ({ className, children }: Props) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <Typography as="h2" variant="title5" color="#32302A" className={classNames}>
      {children}
    </Typography>
  );
};

export default RecordViewerTitle;
