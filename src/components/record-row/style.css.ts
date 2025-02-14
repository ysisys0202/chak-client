import { gray } from "@/constants/colors";
import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const styles = {
  self: style({
    padding: "12px 20px",
  }),
  link: style({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: 12,
  }),
  id: style({
    width: 24,
  }),
  title: style({
    marginLeft: 12,
  }),
  date: style({
    marginLeft: "auto",
  }),
};
