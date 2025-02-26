import { shades } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  row: style({
    padding: 20,
    borderBottom: `1px solid ${shades[600]}`,
  }),
};
