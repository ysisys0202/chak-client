import React from "react";
import { styles } from "./style.css";
import { Typography } from "chak-blocks/plain";
import { shades } from "@/constants/colors";

type Props = {
  title: string;
  count: number;
};

const RecordFile = ({ title, count }: Props) => {
  const hasRecord = count > 0;
  return (
    <div className={styles.self}>
      <div className={styles.folder}>
        <Typography color={shades[800]}>{title}</Typography>
        <Typography
          variant="text2"
          color={shades[800]}
          className={styles.count}
        >
          {hasRecord ? (
            <>
              {" "}
              <Typography as="span" variant="title5">
                {count}
              </Typography>{" "}
              권
            </>
          ) : (
            "아직 기록이 없어요"
          )}
        </Typography>
      </div>
      <div className={styles.paper}></div>
    </div>
  );
};

export default RecordFile;
