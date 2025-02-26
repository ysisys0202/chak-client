import { gray } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

const selfStyle = style({
  width: 26,
  height: 26,
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

const barStyle = {
  width: "100%",
  height: 3,
  borderRadius: 4,
  backgroundColor: gray[800],
};

export const styles = {
  self: selfStyle,
  bar: style({
    ...barStyle,
    marginTop: 12,
    transition: "background-color 50ms ease-in-out",
    selectors: {
      "&::before": {
        ...barStyle,
        content: "",
        display: "block",
        transform: "translateY(-200%)",
        transition: "transform 200ms ease-in-out",
      },
      "&::after": {
        ...barStyle,
        content: "",
        display: "block",
        transform: "translateY(100%)",
        transition: "transform 200ms ease-in-out",
      },
      [`${selfStyle}.is-active &`]: {
        backgroundColor: "transparent",
      },
      [`${selfStyle}.is-active &::before`]: {
        transform: "translate(1%,-11%) rotate(45deg)",
      },
      [`${selfStyle}.is-active &::after`]: {
        transform: "translate(1.5%,-111%) rotate(-45deg)",
      },
    },
  }),
};
