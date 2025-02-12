import { globalStyle, style } from "@vanilla-extract/css";
import { gray } from "@/constants/colors";

const cellPadding = 10;

export const recordContentStyles = {
  self: style({
    border: `1px solid ${gray[600]}`,
    borderRadius: 8,
    overflow: "hidden",
  }),

  bookArea: style({
    display: "flex",
    alignItems: "stretch",
    borderBottom: `1px solid ${gray[600]}`,
  }),
  imageArea: style({
    flex: 1,
    position: "relative",
    padding: cellPadding,
    borderRight: `1px solid ${gray[600]}`,
  }),

  bookCoverImage: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "90%",
    aspectRatio: "1/1.4",
  }),
  bookInfo: style({
    flex: 2,
    width: "100%",
    height: "100%",
  }),
  cellItem: style({
    gap: 0,
    alignItems: "stretch",
    selectors: {
      "&:not(:last-child)": {
        borderBottom: `1px solid ${gray[600]}`,
      },
    },
  }),
  cellInput: style({
    padding: cellPadding,
    width: "100%",
    border: "none",
    borderLeft: `1px solid ${gray[600]}`,
    borderRadius: 0,
  }),
  textarea: style({
    width: "calc(100% - 24px)",
    resize: "none",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.4,
  }),
};

globalStyle(`${recordContentStyles.bookCoverImage} img`, {
  objectFit: "cover",
});

globalStyle(`${recordContentStyles.cellItem} label`, {
  flexShrink: 0,
  margin: 0,
  padding: cellPadding,
  width: 120,
  height: "100%",
});

globalStyle(`${recordContentStyles.cellItem} > div`, {
  width: "100%",
});

export const buttonGroupStyle = style({
  display: "flex",
  justifyContent: "center",
  gap: 20,
});
