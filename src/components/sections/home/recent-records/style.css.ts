import { style } from "@vanilla-extract/css";
import { media } from "@/constants/break-points";

export const styles = {
  self: style({
    marginTop: 40,
    "@media": {
      [media.lg]: {
        marginTop: 80,
      },
    },
  }),
  list: style({
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "16px 14px",
    "@media": {
      [media.sm]: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      [media.md]: {
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px 18px",
      },
      [media.lg]: {
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "26px 24px",
      },
    },
  }),
};
