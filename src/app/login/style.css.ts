import { globalStyle, style } from "@vanilla-extract/css";
import { breakPoints, media } from "@/constants/break-points";
import { shades } from "@/constants/colors";

export const loginPageStyles = {
  self: style({
    position: "relative",
    margin: "0 auto",
    maxWidth: breakPoints.md,
    height: "100vh",
  }),
  container: style({
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "60%",
    borderRadius: 8,
    border: `1px solid ${shades[200]}`,
    overflow: "hidden",
  }),
  intro: style({
    display: "none",
    "@media": {
      [media.lg]: {
        display: "block",
      },
    },
  }),
};

globalStyle(`${loginPageStyles.container} > *`, {
  flex: 1,
  height: "100%",
});
