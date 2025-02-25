import { buttonGroupStyle } from "./style.css";

const ButtonGroup = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`${className} ${buttonGroupStyle}`}>{children}</div>;
};

export default ButtonGroup;
