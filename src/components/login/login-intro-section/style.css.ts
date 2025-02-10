import { keyframes, style } from "@vanilla-extract/css";
import { gray, yellow } from "@/constants/colors";

const text1Interaction = keyframes({
  "12%": { transform: "translate(-50%, -50%)", opacity: 0 },
  "28%": { transform: "translate(-86%, -460%)", opacity: 1 },
  "100%": { transform: "translate(-86%, -460%)", opacity: 1 },
});

const text2Interaction = keyframes({
  "28%": { transform: "translate(-50%, -50%)", opacity: 0 },
  "44%": { transform: "translate(82%, -80%)", opacity: 1 },
  "100%": { transform: "translate(82%, -80%)", opacity: 1 },
});

const text3Interaction = keyframes({
  "44%": { transform: "translate(-50%, -50%)", opacity: 0 },
  "60%": { transform: "translate(-120%, 340%)", opacity: 1 },
  "100%": { transform: "translate(-120%, 340%)", opacity: 1 },
});

const bookInteraction = keyframes({
  "0%": {
    opacity: 0,
  },
  "10%": {
    opacity: 1,
  },
  "100%": {
    opacity: 1,
  },
});

const checkInteraction = keyframes({
  "60%": { opacity: 0 },
  "80%": { opacity: 1 },
  "100%": { opacity: 1 },
});

const mainTextInteraction = keyframes({
  "80%": { transform: "translateY(40px)", opacity: 0 },
  "100%": { transform: "translateY(0)", opacity: 1 },
});

const commonAnimationProperty = "3s ease forwards";

export const loginIntroStyles = {
  self: style({
    padding: `80px 20px`,
    backgroundColor: yellow[50],
    borderRight: `1px solid  ${gray[100]}`,
  }),
  bookInteractionArea: style({
    position: "relative",
  }),
  text1: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -50%)",
    opacity: 0,
    animation: `${text1Interaction} ${commonAnimationProperty}`,
  }),
  text2: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -50%)",
    opacity: 0,
    animation: `${text2Interaction} ${commonAnimationProperty}`,
  }),
  text3: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -0%)",
    opacity: 0,
    animation: `${text3Interaction} ${commonAnimationProperty}`,
  }),
  book: style({
    display: "block",
    margin: "0 auto",
    zIndex: 0,
    animation: `${bookInteraction} ${commonAnimationProperty}`,
  }),
  check: style({
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    transform: "translate(-50%, -64%)",
    opacity: 0,
    animation: `${checkInteraction} ${commonAnimationProperty}`,
  }),
  mainText: style({
    marginTop: 60,
    textAlign: "center",
    transform: "translateY(40px)",
    opacity: 0,
    animation: `${mainTextInteraction} ${commonAnimationProperty}`,
  }),
};
