import { style } from "@vanilla-extract/css";
import { media } from "@/constants/break-points";

export const styles = {
  body: style({
    display: "grid",
    gridTemplateColumns: "repeat(1,1fr)",
    gap: 24,
    "@media": {
      [media.sm]: {
        gridTemplateColumns: "repeat(3,1fr)",
      },
    },
  }),
};
