import { style } from "@vanilla-extract/css";
import { media } from "@/constants/break-points";

export const containerStyles = style({
  padding: "0 20px",
  "@media": {
    [`${media.md}`]: {
      padding: "0 20px",
    },
    [`${media.lg}`]: {
      margin: "0 auto",
      maxWidth: 1280,
    },
  },
});
