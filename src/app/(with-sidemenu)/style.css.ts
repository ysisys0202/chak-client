import { style } from "@vanilla-extract/css";

export const sidemenuLayoutStyles = {
  self: style({
    display: "flex",
  }),
  sidemenu: style({
    position: "fixed",
    left: 0,
    bottom: 0,
  }),
  content: style({
    // marginLeft: 320,
  }),
};
