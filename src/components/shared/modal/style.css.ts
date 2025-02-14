import { style } from "@vanilla-extract/css";

export const modalStyles = {
  self: style({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    width: "80%",
    maxWidth: 800,
    selectors: {
      "&::backdrop": {
        backgroundColor: "rgba(0,0,0,0.6)",
      },
    },
  }),
  content: style({}),
  closeButton: style({
    position: "absolute",
    top: 10,
    right: 4,
  }),
};
