import { sidemenuMaxWidth } from "@/components/sidemenu/style.css";
import { style } from "@vanilla-extract/css";

export const sidemenuLayoutStyles = {
  self: style({
    display: "flex",
  }),
  sidemenu: style({
    position: "fixed",
    left: 0,
    bottom: 0,
  }),
  content: style({
    padding: "60px 0",
    width: `calc(100% - ${sidemenuMaxWidth + 40}px)`,
    maxWidth: 1120,
    marginLeft: sidemenuMaxWidth + 40,
  }),
};
