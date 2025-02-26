import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";
import { bookCoverImageRatio } from "@/constants/size";
import { media } from "@/constants/break-points";

export const styles = {
  row: style({
    display: "flex",
    alignItems: "center",
    gap: 16,
    "@media": {
      [media.md]: {
        gap: 40,
      },
    },
  }),

  image: style({
    flexShrink: 0,
    position: "relative",
    width: 50,
    height: "auto",
    aspectRatio: bookCoverImageRatio,
    border: `1px solid ${shades[200]}`,
    "@media": {
      [media.md]: {
        width: 70,
      },
    },
  }),
  button: style({
    flexShrink: 0,
    marginLeft: "auto",
  }),
  skeletonInfo: style({
    display: "flex",
    flexDirection: "column",
    gap: 4,
  }),
};
