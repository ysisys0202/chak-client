import { shades } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    display: "flex",
    border: `1px solid ${shades[600]}`,
    borderRadius: 8,
    overflow: "hidden",
  }),
  input: style({
    paddingLeft: 8,
    width: "100%",
    height: 30,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 1.4,
  }),
  button: style({
    flexShrink: 0,
    width: 60,
    borderRadius: 0,
  }),
};
