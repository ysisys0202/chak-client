import { scrollbarHidden } from "@/styles/util.css";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    height: "calc(100vh - 40px)",
  }),

  searchbar: style({
    margin: "20px 0",
  }),

  bookList: style([
    scrollbarHidden,
    {
      marginTop: 20,
      height: 400,
      overflow: "auto",
    },
  ]),
  pagination: style({
    marginTop: 20,
  }),
};
