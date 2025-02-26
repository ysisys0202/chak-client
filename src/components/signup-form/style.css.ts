import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";

export const signupFormStyles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    gap: 80,
    padding: "40px",
    width: "100%",
    maxWidth: "500px",
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
};
