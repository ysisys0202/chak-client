import { media } from "@/constants/break-points";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    maxWidth: 580,
  }),
  card: style({
    position: "relative",
    overflowY: "clip",
  }),
  image: style({
    position: "absolute",
    right: -16,
    bottom: -33,
    width: "auto",
    height: "90%",
    aspectRatio: "560/570",
    transform: "rotate(3deg)",
    "@media": {
      [media.md]: {
        right: -34,
        bottom: -33,
        height: "120%",
      },
      [media.lg]: {
        height: "110%",
      },
    },
  }),
  button: style({
    marginTop: 20,
  }),
};
