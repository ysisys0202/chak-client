import { style } from "@vanilla-extract/css";
import { breakPoints } from "@/constants/break-points";

export const visuallyHidden = style({
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: 0,
});

export const smOnly = style({
  "@media": {
    [`(min-width: ${breakPoints.md})`]: {
      display: "none !important",
    },
  },
});

export const mdOnly = style({
  "@media": {
    [` (max-width: ${breakPoints.md - 1}px) or (min-width: ${
      breakPoints.lg
    }px)`]: {
      display: "none !important",
    },
  },
});

export const lgOnly = style({
  "@media": {
    [`(max-width: ${breakPoints.lg - 1}px)`]: {
      display: "none !important",
    },
  },
});

export const smHidden = style({
  "@media": {
    [`(max-width: ${breakPoints.md - 1}px)`]: {
      display: "none !important",
    },
  },
});

export const mdHidden = style({
  "@media": {
    [`(min-width: ${breakPoints.md}px) and (max-width: ${
      breakPoints.lg - 1
    }px)`]: {
      display: "none !important",
    },
  },
});

export const lgHidden = style({
  "@media": {
    [`(min-width: ${breakPoints.lg}px)`]: {
      display: "none !important",
    },
  },
});
