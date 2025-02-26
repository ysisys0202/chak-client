import { style } from "@vanilla-extract/css";

const prevIconStyle = style({
  transform: "rotate(90deg)",
});
const nextIconStyle = style({
  transform: "rotate(-90deg)",
});
export const styles = {
  self: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  }),
  button: style({
    padding: "5px 4px",
    position: "relative",
  }),
  prevIcon: prevIconStyle,
  doublePrevIcon: style([
    prevIconStyle,
    {
      position: "absolute",
      right: "calc(50% - 4px)",
    },
  ]),
  nextIcon: nextIconStyle,
  doubleNextIcon: style([
    nextIconStyle,
    {
      position: "absolute",
      left: "calc(50% - 4px)",
    },
  ]),
};
