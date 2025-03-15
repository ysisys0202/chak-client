"use client";

import { zIndex } from "@/constants/z-index";
import { useSidemenu } from "@/providers/sidemenu";
import Dimmed from "@/components/shared/dimmed/dimmed";
import { lgHidden } from "@/styles/util.css";

const SidemenuDimmed = () => {
  const { sidemenuActive, closeSidemenu } = useSidemenu();
  if (!sidemenuActive) {
    return null;
  }
  return (
    <Dimmed
      className={lgHidden}
      zIndex={zIndex.sidemenu - 50}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeSidemenu();
        }
      }}
    />
  );
};

export default SidemenuDimmed;
