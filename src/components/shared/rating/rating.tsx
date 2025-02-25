import { combineClassNames } from "@/util/common";
import { RatingStar, Typography } from "chak-blocks/plain";
import React from "react";
import { styles } from "./style.css";

type Props = {
  value: number;
  className?: string;
};

const Rating = ({ value, className }: Props) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <div className={classNames}>
      <RatingStar value={100} />
      <Typography variant="text2" strong theme="tertiary" as="span">
        {value}
      </Typography>
    </div>
  );
};

export default Rating;
