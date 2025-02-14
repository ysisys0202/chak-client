import { gray } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    display: "flex",
    border: `1px solid ${gray[600]}`,
    borderRadius: 8,
  }),
  input: style({
    width: "100%",
    height: 30,
    border: "none",
    backgroundColor: "transparent",
  }),
  button: style({
    flexShrink: 0,
    width: 60,
  }),
};
