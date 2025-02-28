import { style } from "@vanilla-extract/css";

export const listStyles = {
  utilArea: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  }),

  pagination: style({
    marginTop: 16,
  }),
};

export const recordDetailSectionStyles = {
  self: style({}),
  buttonGroup: style({
    marginTop: 40,
  }),
};
