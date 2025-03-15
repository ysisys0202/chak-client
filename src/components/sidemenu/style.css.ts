import { style } from "@vanilla-extract/css";
import { background, shades } from "@/constants/colors";
import { breakPoints, media } from "@/constants/break-points";

const verticalSpace = 60;
const sideSpace = 24;
export const sidemenuMaxWidth = 280;

export const sidemenuStyles = {
  self: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "100%",
    maxWidth: breakPoints.sm,
    height: "100vh",
    backgroundColor: background.solid,
    border: `1px solid ${shades[100]}`,
    borderRadius: "0 120px 0 0",
    zIndex: 500,
    "@media": {
      [media.lg]: {
        maxWidth: sidemenuMaxWidth,
        backgroundColor: background.ghost,
      },
    },
  }),
  logo: style({
    margin: `120px 0 0 ${sideSpace}px`,
    "@media": {
      [media.lg]: {
        marginTop: verticalSpace,
      },
    },
  }),
  userProfile: style({
    marginTop: 40,
    marginLeft: sideSpace,
    "@media": {
      [media.lg]: {
        margin: "120px auto 0",
      },
    },
  }),
  nav: style({
    marginTop: 40,
    width: "100%",
    "@media": {
      [media.lg]: {
        marginTop: 80,
      },
    },
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
