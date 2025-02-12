import { style } from "@vanilla-extract/css";

export const recentRecordSectionStyles = {
  self: style({}),
  list: style({
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px 12px",
  }),
};
