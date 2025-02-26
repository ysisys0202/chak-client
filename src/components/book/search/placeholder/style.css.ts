import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";
import { media } from "@/constants/break-points";

export const styles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: "20px",
    height: "calc(100% - 200px)",
    borderRadius: 8,
    border: `1px solid ${shades[100]}`,
  }),
  text: style({
    marginTop: 80,
    whiteSpace: "pre-wrap",
  }),
  image: style({
    position: "absolute",
    left: "50%",
    bottom: "5%",
    transform: "translateX(-50%)",
    width: 140,
    height: "auto",
    "@media": {
      [media.md]: {
        bottom: "20%",
        width: 200,
      },
    },
  }),
};
