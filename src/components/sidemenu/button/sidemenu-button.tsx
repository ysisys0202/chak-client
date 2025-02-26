"use client";

import React, { LinkHTMLAttributes } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { combineClassNames, scrollHandler } from "@/util/common";
import { addQueryParam, removeQueryParam } from "@/util/url";
import { styles } from "./style.css";

const SidemenuButton = (props: LinkHTMLAttributes<HTMLAnchorElement>) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const isActive = searchParams.get("sidemenu") === "true";
  const url = isActive
    ? removeQueryParam(`${pathname}?${searchParams.toString()}`, "sidemenu")
    : addQueryParam(
        `${pathname}?${searchParams.toString()}`,
        "sidemenu",
        "true"
      );

  const classNames = combineClassNames(
    props.className,
    styles.self,
    isActive && "is-active"
  );
  const { disableScroll, enableScroll } = scrollHandler();

  if (isActive) {
    disableScroll();
  } else {
    enableScroll();
  }

  return (
    <Link href={url} replace scroll={false} {...props} className={classNames}>
      <div className={styles.bar}></div>
    </Link>
  );
};

export default SidemenuButton;
