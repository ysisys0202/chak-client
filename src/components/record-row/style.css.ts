import { gray } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const recordRowStyles = {
  self: style({
    border: `1px solid ${gray[200]}`,
    borderRadius: 8,
  }),
  link: style({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 12,
    padding: "8px 24px",
  }),
  id: style({
    width: 24,
  }),
  date: style({
    marginLeft: "auto",
  }),
};
