import { gray } from "@/constants/colors";
import { bookCoverImageRatio } from "@/constants/size";
import { globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  row: style({
    gap: 40,
  }),

  image: style({
    position: "relative",
    height: 100,
    aspectRatio: bookCoverImageRatio,
    border: `1px solid ${gray[200]}`,
  }),
};

globalStyle(`${styles.row} .content-area-right`, {
  display: "flex",
  justifyContent: "end",
  flexShrink: 0,
  marginLeft: "auto",
});
