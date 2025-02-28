import { keyframes, style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";

const offset = 187;
const duration = 1.4;

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const colorChange = keyframes({
  "0%": { stroke: shades[400] },
  "100%": { stroke: shades[800] },
});

const dash = keyframes({
  "0%": { strokeDashoffset: offset, transform: "rotate(0deg)" },
  "50%": { strokeDashoffset: offset * 0.3, transform: "rotate(180deg)" },
  "100%": { strokeDashoffset: offset, transform: "rotate(360deg)" },
});

export const styles = {
  self: style({
    animation: `${spin} ${duration}s linear infinite`,
  }),
  path: style({
    strokeDasharray: offset,
    strokeDashoffset: offset,
    transformOrigin: "center",
    animation: `${dash} ${duration}s ease-in-out infinite, ${colorChange} ${
      duration * 2
    }s ease-in-out infinite`,
  }),
};
