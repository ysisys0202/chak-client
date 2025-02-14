import { gray } from "@/constants/colors";
import { globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  list: style({
    border: `1px solid ${gray[600]}`,
    borderRadius: 8,
  }),

  row: style({
    display: "flex",
    alignItems: "center",
    padding: 20,
    selectors: {
      "&:not(:last-child)": {
        borderBottom: `1px solid ${gray[600]}`,
      },
    },
  }),
};
