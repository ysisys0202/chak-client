import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    padding: "12px 20px",
  }),
  link: style({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 12,
  }),
  title: style({
    marginLeft: 12,
  }),
  date: style({
    marginLeft: "auto",
  }),
};
