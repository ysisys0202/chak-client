import { media } from "@/constants/break-points";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    gap: 40,
    "@media": {
      [media.lg]: {
        gap: 80,
      },
    },
  }),
};
