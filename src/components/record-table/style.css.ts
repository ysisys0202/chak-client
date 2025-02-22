import { globalStyle, style } from "@vanilla-extract/css";
import { gray } from "@/constants/colors";
import { bookCoverImageRatio } from "@/constants/size";

export const recordTableStyles = {
  self: style({
    border: `1px solid ${gray[600]}`,
    borderRadius: 8,
    overflow: "hidden",
  }),

  bookTable: style({
    display: "flex",
    alignItems: "stretch",
    borderBottom: `1px solid ${gray[600]}`,
  }),
  imageCell: style({
    flex: 1,
    position: "relative",
    borderRight: `1px solid ${gray[600]}`,
  }),

  bookCoverImage: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "90%",
    aspectRatio: bookCoverImageRatio,
  }),
  bookInfo: style({
    flex: 2,
    width: "100%",
    height: "100%",
  }),
};

globalStyle(`${recordTableStyles.bookCoverImage} img`, {
  objectFit: "cover",
});

const recordTableCellStyle = style({
  padding: 10,
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.4,
});

export const recordTableHeaderStyle = style([
  recordTableCellStyle,
  {
    flexShrink: 0,
    margin: 0,
    width: 120,
    height: "100%",
  },
]);

export const recordTableDataStyle = style([
  recordTableCellStyle,
  {
    width: "100%",
    borderLeft: `1px solid ${gray[600]}`,
    whiteSpace: "pre-wrap",
  },
]);

globalStyle(`${recordTableDataStyle} input, textarea, select`, {
  border: "none",
  outline: "none",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: 1.4,
});

globalStyle(`${recordTableDataStyle} textarea`, {
  width: "calc(100% - 24px)",
  resize: "none",
});

export const buttonGroupStyle = style({
  display: "flex",
  justifyContent: "center",
  gap: 20,
});

export const recordTableRowStyle = style({
  display: "flex",
  selectors: {
    "&:not(:last-child)": {
      borderBottom: `1px solid ${gray[600]}`,
    },
  },
});
