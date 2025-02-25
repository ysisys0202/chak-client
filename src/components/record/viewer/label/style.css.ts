import { style } from "@vanilla-extract/css";
import { cellStyle } from "../data/style.css";
import { border } from "@/constants/colors";

export const styles = {
  self: style([
    cellStyle,
    {
      margin: 0,
      fontWeight: 600,
      color: "#32302A",
    },
  ]),
};
