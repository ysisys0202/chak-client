import { style } from "@vanilla-extract/css";
import { background, border } from "@/constants/colors";

const verticalSpace = 60;
const sideSpace = 24;
export const sidemenuMaxWidth = 280;

export const sidemenuStyles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "100%",
    maxWidth: sidemenuMaxWidth,
    height: "100vh",
    borderRadius: "0 120px 0 0",
    backgroundColor: background,
    border: `1px solid ${border}`,
  }),
  logo: style({
    margin: `${verticalSpace}px 0 0 ${sideSpace}px`,
  }),
  userProfile: style({
    margin: "0 auto",
    marginTop: 120,
  }),
  nav: style({
    marginTop: 80,
    width: "100%",
  }),
  logoutButton: style({
    marginTop: "auto",
    marginLeft: `${sideSpace}px`,
    marginBottom: `${verticalSpace}px`,
  }),
};

export const sidemenuItemStyles = {
  link: style({
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: `12px ${sideSpace}px`,
    width: "calc(100% - 16px)",
    borderRadius: "0 8px 8px 0",
    transition: "background 200ms ease-in-out",
    selectors: {
      ["&:hover"]: {
        backgroundColor: "rgba(255,255,255,0.6)",
      },
    },
  }),
};
