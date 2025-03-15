import { style } from "@vanilla-extract/css";
import { media } from "@/constants/break-points";
import { zIndex } from "@/constants/z-index";
import { sidemenuMaxWidth } from "@/components/sidemenu/style.css";
import { lgHidden } from "@/styles/util.css";

export const styles = {
  self: style({
    display: "flex",
  }),
  sidemenuButton: style([
    lgHidden,
    {
      position: "fixed",
      top: 20,
      left: 24,
      zIndex: zIndex.sidemenuButton,
    },
  ]),
  sidemenu: style({
    position: "fixed",
    left: 0,
    bottom: 0,
    zIndex: zIndex.sidemenu,
    transform: "translateX(-100%)",
    transition: "transform 200ms ease-in-out",
    selectors: {
      "&.is-active": {
        transform: "translateX(0)",
      },
    },
    "@media": {
      [media.lg]: {
        transform: "translateX(0)",
      },
    },
  }),
  content: style({
    margin: "0 auto",
    padding: "80px 0",
    width: "100%",
    maxWidth: 892,

    "@media": {
      [media.lg]: {
        margin: 0,
        padding: "120px 0",
        width: `calc(100% - ${sidemenuMaxWidth + 40}px)`,
        maxWidth: 1120,
        marginLeft: sidemenuMaxWidth + 40,
      },
    },
  }),
};
