import { style } from "@vanilla-extract/css";
import { orange } from "@/constants/colors";
import { media } from "@/constants/break-points";

export const sectionHeaderStyles = {
  description: style({
    marginTop: 8,
  }),
};

export const sectionBodyStyles = {
  self: style({
    marginTop: 20,
    padding: 20,
    border: `1px solid ${orange}`,
    "@media": {
      [media.lg]: {
        padding: 40,
      },
    },
  }),
};
