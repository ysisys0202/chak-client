import { HTMLAttributes } from "react";
import { dimmedStyle } from "./style.css";

type Props = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

const Dimmed = ({ children, className, ...props }: Props) => {
  return (
    <div className={`${dimmedStyle} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Dimmed;
