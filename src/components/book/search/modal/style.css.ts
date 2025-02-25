import { gray } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    height: "calc(100vh - 40px)",
  }),

  searchbar: style({
    margin: "20px 0",
  }),

  bookList: style({
    marginTop: 20,
    height: "calc(100% - 200px)",
    overflow: "auto",
    selectors: {
      "&::-webkit-scrollbar": {
        width: "12px",
      },
      "&::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "#32302A",
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: gray[50],
      },
    },
  }),
  pagination: style({
    marginTop: 20,
  }),
};
