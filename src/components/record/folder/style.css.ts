import { CSSProperties, style } from "@vanilla-extract/css";
import { background, shades, white } from "@/constants/colors";

const folderBorderColor = shades[100];
const folderBackgroundColor = background.solid;

const paperBorderColor = shades[100];
const paperBackgroundColor = white;

const selfStyle = style({
  position: "relative",
  paddingTop: 18,
  width: "100%",
  overflow: "hidden",
});

const paperStyle: CSSProperties = {
  content: "",
  position: "absolute",
  top: 0,
  right: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",
  border: `1px solid ${paperBorderColor}`,
  borderRadius: 12,
  backgroundColor: paperBackgroundColor,
  transition: "transform 200ms ease-in-out",
};

export const styles = {
  self: selfStyle,
  folder: style({
    position: "relative",
    zIndex: 2,
    backgroundColor: folderBackgroundColor,
    borderRadius: 12,
    borderTopLeftRadius: 0,
    padding: "80px 20px 20px",
    border: `1px solid ${folderBorderColor}`,
    selectors: {
      "&::before": {
        content: "",
        position: "absolute",
        top: 1,
        left: 0,
        zIndex: 4,
        transform: "translateY(-100%)",
        width: 40,
        height: 14,
        background: folderBackgroundColor,
        borderTopLeftRadius: 12,
        clipPath: "polygon(0% 100%, 100% 100%, 80% 0%, 0% 0%)",
        borderTop: 4,
      },
      "&::after": {
        content: "",
        position: "absolute",
        top: 0,
        left: -1,
        zIndex: 2,
        transform: "translateY(calc(-100%))",
        width: 41,
        height: 14,
        background: folderBorderColor,
        borderTopLeftRadius: 12,
        clipPath: "polygon(0% 100%, 100% 100%, 80% 0%, 0% 0%)",
        borderTop: 4,
      },
    },
  }),
  count: style({
    marginTop: 12,
  }),
  paper: style({
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
    width: "calc(100% - 28px)",
    height: "100%",
    selectors: {
      "&::before": paperStyle,
      "&::after": paperStyle,
      [`${selfStyle}:hover &::before`]: {
        transform: "rotate(-2deg)",
      },
      [`${selfStyle}:hover &::before`]: {
        transform: "rotate(-4deg)",
      },
    },
  }),
};
