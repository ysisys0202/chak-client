import { bookCoverImageRatio } from "@/constants/size";
import { globalStyle, style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    display: "flex",
    alignItems: "stretch",
  }),
  imageCell: style({
    flex: 1,
    position: "relative",
  }),

  bookCoverImage: style({
    height: "90%",
    aspectRatio: bookCoverImageRatio,
  }),
  bookInfo: style({
    flex: 2,
    width: "100%",
    height: "100%",
  }),
};

globalStyle(`${styles.bookCoverImage} img`, {
  objectFit: "cover",
});
