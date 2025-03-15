"use client";

import React, { ButtonHTMLAttributes } from "react";
import { combineClassNames } from "@/util/common";
import { styles } from "./style.css";
import { useSidemenu } from "@/providers/sidemenu";

const SidemenuButton = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { sidemenuActive, toggleSidemenu } = useSidemenu();
  const classNames = combineClassNames(
    props.className,
    styles.self,
    sidemenuActive && "is-active"
  );

  return (
    <button
      type="button"
      {...props}
      className={classNames}
      onClick={() => {
        toggleSidemenu();
      }}
    >
      <div className={styles.bar}></div>
    </button>
  );
};

export default SidemenuButton;
