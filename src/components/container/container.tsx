import { containerStyles } from "./style.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={containerStyles}>{children}</div>;
};

export default Container;
