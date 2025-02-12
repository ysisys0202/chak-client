import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
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
    [`(min-width: ${breakPoints.md}px)`]: {
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

export const lineClampBase = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
});

export const lineClamp = recipe({
  base: lineClampBase,
  variants: {
    lines: {
      1: { WebkitLineClamp: 1 },
      2: { WebkitLineClamp: 2 },
      3: { WebkitLineClamp: 3 },
      4: { WebkitLineClamp: 4 },
      5: { WebkitLineClamp: 5 },
    },
  },
  defaultVariants: {
    lines: 1,
  },
});
