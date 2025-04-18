import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";
import { breakPoints } from "@/constants/break-points";

export const signupFormStyles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    gap: 80,
    padding: "40px",
    width: "100%",
    maxWidth: breakPoints.sm,
    borderRadius: 8,
    border: `1px solid ${shades[200]}`,
  }),
  fileds: style({
    display: "flex",
    flexDirection: "column",
    gap: 40,
  }),
  input: style({
    width: "100%",
  }),
  button: style({
    margin: "0 auto",
    width: "100%",
    maxWidth: 200,
  }),
  loadingSpinner: style({
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: 50,
    transform: "translate(-50%, -100%)",
  }),
};
