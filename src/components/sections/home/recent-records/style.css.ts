import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    marginTop: 80,
  }),
  list: style({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px 12px",
  }),
};
