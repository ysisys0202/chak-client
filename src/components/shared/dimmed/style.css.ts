import { zIndex } from "@/constants/z-index";
import { style } from "@vanilla-extract/css";

export const dimmedStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: zIndex.dimmed,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.6)",
});
