import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";
import { cellStyle } from "../data/style.css";

export const styles = {
  self: style([
    cellStyle,
    {
      margin: 0,
      fontWeight: 600,
      color: shades[800],
    },
  ]),
};
