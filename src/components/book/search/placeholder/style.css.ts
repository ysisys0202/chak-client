import { style } from "@vanilla-extract/css";
import { shades } from "@/constants/colors";

export const styles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    height: "calc(100% - 200px)",
    borderRadius: 8,
    border: `1px solid ${shades[900]}`,
  }),
  text: style({
    marginTop: 80,
    whiteSpace: "pre-wrap",
  }),
  image: style({
    marginTop: 80,
    width: 200,
    height: "auto",
  }),
};
