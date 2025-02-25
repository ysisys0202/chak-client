import { gray } from "@/constants/colors";
import { bookCoverImageRatio } from "@/constants/size";
import { style } from "@vanilla-extract/css";

export const styles = {
  row: style({
    display: "flex",
    alignItems: "center",
    gap: 40,
  }),

  image: style({
    position: "relative",
    width: 70,
    height: 98,
    aspectRatio: bookCoverImageRatio,
    border: `1px solid ${gray[200]}`,
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
