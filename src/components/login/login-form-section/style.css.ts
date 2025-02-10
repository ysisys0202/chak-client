import { globalStyle, style } from "@vanilla-extract/css";

export const loginFormSectionStyles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `80px 20px`,
  }),
  form: style({
    marginTop: 20,
  }),
};
