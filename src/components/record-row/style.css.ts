import { media } from "@/constants/break-points";
import { background } from "@/constants/colors";
import { lineClampBase } from "@/styles/util.css";
import { style } from "@vanilla-extract/css";

const selfStyles = style({
  padding: "8px 4px",
  selectors: {
    "&:nth-of-type(2n)": {
      backgroundColor: background.ghost,
    },
  },
  "@media": {
    [media.lg]: {
      padding: "12px 20px",
    },
  },
});

export const styles = {
  self: selfStyles,
  link: style({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 6,
    "@media": {
      [media.lg]: {
        gap: 12,
      },
    },
  }),
  text: style({
    whiteSpace: "nowrap",
  }),
  image: style({
    flexShrink: 0,
    whiteSpace: "nowrap",
  }),
  title: style([
    lineClampBase,
    {
      WebkitLineClamp: 1,
      transition: "font-weight 200ms ease-in-out",
      "@media": {
        [media.lg]: {
          marginLeft: 12,
        },
      },
      selectors: {
        [`${selfStyles}:hover &`]: {
          fontWeight: 600,
        },
      },
    },
  ]),
  date: style({
    marginLeft: "auto",
    whiteSpace: "nowrap",
  }),
};
