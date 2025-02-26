import { globalStyle } from "@vanilla-extract/css";

globalStyle("body, html", {
  height: "100%",
});

globalStyle("body.no-scroll, html.no-scroll", {
  overflow: "hidden",
});

globalStyle("html", {
  backgroundColor: "#fffbf3",
});
