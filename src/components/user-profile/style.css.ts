import { media } from "@/constants/break-points";
import { shades } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  }),
  profileImage: style({
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: `1px solid ${shades[100]}`,
    backgroundColor: shades[50],
    "@media": {
      [media.md]: {
        width: 80,
        height: 80,
      },
    },
  }),
  image: style({
    objectFit: "cover",
  }),
};
