import { globalStyle, style } from "@vanilla-extract/css";

export const cellStyle = style({
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.4,
});

export const styles = {
  self: style([
    cellStyle,
    {
      width: "100%",
      whiteSpace: "pre-wrap",
      color: "#605D56",
    },
  ]),
};

globalStyle(`${styles.self} input, textarea, select`, {
  border: "none",
  outline: "none",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.4,
});

globalStyle(`${styles.self} textarea`, {
  width: "calc(100% - 24px)",
  resize: "none",
});
