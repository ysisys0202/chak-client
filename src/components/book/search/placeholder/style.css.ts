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
    borderRadius: 8,
    border: `1px solid ${shades[100]}`,
  }),
  text: style({
    marginTop: 80,
    whiteSpace: "pre-wrap",
  }),
  image: style({
    marginTop: 180,
    width: 120,
    height: "auto",
    "@media": {
      [media.md]: {
        marginTop: 240,
        marginBottom: 120,
        width: 160,
      },
    },
  }),
};
