import { style } from "@vanilla-extract/css";

const base = style({
  position: "relative",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.4,
});

export const styles = {
  input: style([
    base,
    {
      width: "calc(100% - 24px)",
    },
  ]),
  select: base,
  textarea: style([
    base,
    {
      width: "calc(100% - 24px)",
      resize: "none",
    },
  ]),
};
