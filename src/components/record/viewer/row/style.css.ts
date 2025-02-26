import { media } from "@/constants/break-points";
import { shades } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const styles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    gap: 2,
    position: "relative",
    padding: "4px 0",
    borderBottom: `1px solid ${shades[200]}`,
    selectors: {
      "&::after": {
        content: "",
        position: "absolute",
        left: "50%",
        bottom: 0,
        width: "100%",
        height: 1,
        backgroundColor: shades[600],
        transform: "translateX(-50%) scaleX(0)",
        transition: "transform 200ms ease-in-out",
      },
      "&:focus-within::after": {
        transform: "translateX(-50%) scaleX(100%)",
      },
    },
    "@media": {
      [media.md]: {
        gap: 8,
        padding: "10px 0",
      },
    },
  }),
};
