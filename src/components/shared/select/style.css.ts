import { background, shades, white } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    backgroundColor: background.ghost,
    border: `1px solid ${shades[100]}`,
    outline: "none",
    borderRadius: 6,
    padding: "6px 14px",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.4,
    selectors: {
      "&:focus": {
        border: `1px solid ${shades[600]}`,
      },
    },
  }),
};
