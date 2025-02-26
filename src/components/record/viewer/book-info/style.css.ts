import { globalStyle, style } from "@vanilla-extract/css";
import { bookCoverImageRatio } from "@/constants/size";
import { media } from "@/constants/break-points";

export const styles = {
  self: style({
    marginBottom: 48,
    "@media": {
      [media.sm]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  }),
  imageCell: style({
    position: "relative",
    margin: "0 auto",
    maxWidth: 180,
    "@media": {
      [media.sm]: {
        flex: 2,
        marginLeft: 0,
        maxWidth: 240,
      },
    },
  }),
  bookCoverImage: style({
    width: "100%",
    aspectRatio: bookCoverImageRatio,
  }),
  bookInfo: style({
    marginTop: 24,
    "@media": {
      [media.sm]: {
        marginTop: 0,
        width: "calc(100% - 240px - 40px)",
      },
      [media.lg]: {
        width: "calc(100% - 240px - 60px)",
      },
    },
  }),
};

globalStyle(`${styles.bookCoverImage} img`, {
  objectFit: "cover",
});
