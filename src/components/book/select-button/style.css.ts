import { style } from "@vanilla-extract/css";
import { gray } from "@/constants/colors";

export const styles = {
  self: style({
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    backgroundColor: gray[50],
    border: `1px solid ${gray[200]}`,
    overflow: "hidden",
  }),
};
