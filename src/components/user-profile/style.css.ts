import { gray } from "@/constants/colors";
import { style } from "@vanilla-extract/css";

export const userProfileStyles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  }),
  profileImage: style({
    width: 80,
    height: 80,
    borderRadius: "50%",
    border: `1px solid ${gray[200]}`,
    backgroundColor: gray[50],
  }),
};
