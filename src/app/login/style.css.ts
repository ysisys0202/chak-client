import { media } from "@/constants/break-points";
import { gray, yellow } from "@/constants/colors";
import { globalStyle, style } from "@vanilla-extract/css";

export const loginPageStyles = {
  self: style({
    position: "relative",
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
    border: `1px solid ${gray[200]}`,
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
