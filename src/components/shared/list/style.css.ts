import { gray } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  row: style({
    padding: 20,
    borderBottom: `1px solid ${gray[600]}`,
  }),
};
