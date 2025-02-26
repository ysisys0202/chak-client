import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";

export const cellStyle = style({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.4,
});

export const styles = {
  self: style([
    cellStyle,
    {
      width: "100%",
      whiteSpace: "pre-wrap",
      color: shades[600],
    },
  ]),
};
