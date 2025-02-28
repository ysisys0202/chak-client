import { media } from "@/constants/break-points";
import { style } from "@vanilla-extract/css";

export const modalStyles = {
  self: style({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "40px 20px",
    width: "calc(100% - 16px)",
    maxWidth: 800,
    selectors: {
      "&::backdrop": {
        display: "none",
      },
    },
    "@media": {
      [media.md]: {
        padding: "40px",
        width: "80%",
      },
    },
  }),
  content: style({}),
  closeButton: style({
    position: "absolute",
    top: 10,
    right: 4,
  }),
};
