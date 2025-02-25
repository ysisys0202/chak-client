import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    maxWidth: 580,
  }),
  body: style({
    position: "relative",
    overflowY: "clip",
  }),
  image: style({
    position: "absolute",
    right: -34,
    bottom: -33,
    width: "auto",
    height: "110%",
    aspectRatio: "560/570",
    transform: "rotate(6deg)",
  }),
  button: style({
    marginTop: 20,
  }),
};
