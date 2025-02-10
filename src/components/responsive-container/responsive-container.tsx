import { reponsiveContainerStyles } from "./style.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={reponsiveContainerStyles}>{children}</div>;
};

export default Container;
