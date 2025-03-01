import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 120,
  }),

  text: style({
    marginTop: 12,
  }),
  button: style({
    marginTop: 48,
  }),
};
