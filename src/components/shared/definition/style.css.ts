import { style } from "@vanilla-extract/css";

export const styles = {
  list: style({
    display: "flex",
    flexDirection: "column",
  }),
  item: style({
    display: "flex",
  }),
  term: style({
    display: "flex",
    alignItems: "center",
    selectors: {
      "&::after": {
        content: ":",
        display: "block",
        margin: "0 4px",
      },
    },
  }),
};
