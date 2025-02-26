import { style } from "@vanilla-extract/css";
import { orange } from "@/constants/colors";

export const sectionHeaderStyles = {
  description: style({
    marginTop: 8,
  }),
};

export const sectionBodyStyles = {
  self: style({
    marginTop: 20,
    padding: 40,
    border: `1px solid ${orange}`,
  }),
};
