import React, { ButtonHTMLAttributes } from "react";
import { combineClassNames } from "@/util/common";
import { styles } from "./style.css";

type Props = { isActive: boolean } & ButtonHTMLAttributes<HTMLButtonElement>;

const SidemenuButton = ({ isActive, ...props }: Props) => {
  const classNames = combineClassNames(
    props.className,
    styles.self,
    isActive && "is-active"
  );

  return (
    <button type="button" {...props} className={classNames}>
      <div className={styles.bar}></div>
    </button>
  );
};

export default SidemenuButton;
