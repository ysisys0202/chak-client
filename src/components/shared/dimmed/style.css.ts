import { createVar, style } from "@vanilla-extract/css";

export const zIndexVar = createVar();

export const dimmedStyle = style({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: zIndexVar,
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.6)",
});
