import { HTMLAttributes } from "react";
import { dimmedStyle, zIndexVar } from "./style.css";
import { combineClassNames } from "@/util/common";
import { zIndex as positionIndex } from "@/constants/z-index";
import { assignInlineVars } from "@vanilla-extract/dynamic";
type Props = {
  zIndex?: number;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

const Dimmed = ({
  zIndex = positionIndex.dimmed,
  children,
  className,
  style,
  ...props
}: Props) => {
  const classNames = combineClassNames(dimmedStyle, className);
  const styles = {
    ...(style ? style : {}),
    ...assignInlineVars({
      [zIndexVar]: String(zIndex),
    }),
  };
  return (
    <div {...props} className={classNames} style={styles}>
      {children}
    </div>
  );
};

export default Dimmed;
