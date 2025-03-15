"use client";

import { useSidemenu } from "@/providers/sidemenu";
import { combineClassNames, scrollHandler } from "@/util/common";
import React, { useEffect } from "react";
import { sidemenuStyles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SidemenuContainer = ({ children, className }: Props) => {
  const { sidemenuActive } = useSidemenu();

  const classNames = combineClassNames(
    className,
    sidemenuStyles.self,
    sidemenuActive && "is-active"
  );

  useEffect(() => {
    const { disableScroll, enableScroll } = scrollHandler();

    if (sidemenuActive) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [sidemenuActive]);
  return <aside className={classNames}>{children}</aside>;
};

export default SidemenuContainer;
