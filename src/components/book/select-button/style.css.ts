import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";

export const styles = {
  self: style({
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    backgroundColor: shades[50],
    border: `1px solid ${shades[200]}`,
    overflow: "hidden",
  }),
};
