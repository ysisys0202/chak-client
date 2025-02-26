import { createVar, style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";
import { bookCoverImageRatio } from "@/constants/size";

export const widthVar = createVar();
export const heightVar = createVar();

export const styles = {
  self: style({
    position: "relative",
    width: widthVar,
    height: heightVar,
    aspectRatio: bookCoverImageRatio,
    border: `1px solid ${shades[200]}`,
    overflow: "hidden",
  }),
  skeletion: style({
    width: "100%",
    height: "100%",
  }),
};
