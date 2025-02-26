import { media } from "@/constants/break-points";
import { shades } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  row: style({
    padding: "10px 4px",
    borderBottom: `1px solid ${shades[100]}`,
    "@media": {
      [media.md]: {
        padding: 20,
      },
    },
  }),
};
