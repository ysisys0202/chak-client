import { globalStyle, style } from "@vanilla-extract/css";

export const loginFormStyles = {
  self: style({
    width: "100%",
    maxWidth: 400,
  }),
  fields: style({
    display: "flex",
    flexDirection: "column",
    gap: 12,
  }),
  field: style({}),
  input: style({
    width: "100%",
  }),
  buttonArea: style({
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 40,
  }),
  loadingSpinner: style({
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: 50,
    transform: "translate(-50%, -100%)",
  }),
};

globalStyle(`${loginFormStyles.field} > strong`, {
  display: "none",
});

globalStyle(`${loginFormStyles.buttonArea} > a > div`, {
  width: "100%",
});
