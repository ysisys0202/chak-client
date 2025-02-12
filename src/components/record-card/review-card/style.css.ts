import { style } from "@vanilla-extract/css";
import { gray, white } from "@/constants/colors";
import { lineClamp, lineClampBase } from "@/styles/util.css";

const recordCardStyle = style({
  border: `1px solid ${gray[200]}`,
  overflow: "hidden",
  borderRadius: 12,
});
export const recordCardStyles = {
  self: recordCardStyle,
  link: style({
    display: "block",
    position: "relative",
  }),
  image: style({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
  content: style({
    position: "absolute",
    left: "50%",
    bottom: 12,
    transform: "translateX(-50%)",
    padding: "20px 16px",
    width: "calc(100% - 24px)",
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
