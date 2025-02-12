import { style } from "@vanilla-extract/css";

export const recordListSectionStyles = {
  self: style({}),
  list: style({
    display: "flex",
    flexDirection: "column",
    gap: 4,
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
