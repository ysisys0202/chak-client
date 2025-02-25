import { style } from "@vanilla-extract/css";
import { gray } from "@/constants/colors";
import { lineClampBase } from "@/styles/util.css";
import { bookCoverImageRatio } from "@/constants/size";

const recordCardStyle = style({
  border: `1px solid ${gray[200]}`,
  overflow: "hidden",
  borderRadius: 12,
  aspectRatio: bookCoverImageRatio,
});

export const styles = {
  self: recordCardStyle,
  link: style({
    display: "block",
    position: "relative",
    width: "100%",
    height: "100%",
  }),
  image: style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
  content: style({
    position: "absolute",
    left: "50%",
    bottom: 10,
    transform: "translateX(-50%)",
    padding: "20px 16px",
    width: "calc(100% - 20px)",
    borderRadius: 12,
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255,255,255,0.6)",
  }),
  title: style([
    lineClampBase,
    {
      WebkitLineClamp: 1,
    },
  ]),
  description: style([
    lineClampBase,
    {
      marginTop: 12,
      WebkitLineClamp: 4,
    },
  ]),
  bottom: style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
  }),
};
