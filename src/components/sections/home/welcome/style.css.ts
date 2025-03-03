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
    right: 20,
    bottom: 20,
    width: "auto",
    height: 40,
    aspectRatio: "300/130",
    "@media": {
      [media.lg]: {
        right: 40,
        bottom: 40,
        height: 60,
      },
    },
  }),
  button: style({
    marginTop: 20,
  }),
  sekeletonHeader: style({
    display: "flex",
    alignItems: "end",
    gap: 4,
  }),
};
