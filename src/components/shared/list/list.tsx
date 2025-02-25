import React from "react";
import { styles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const List = ({ className, children }: Props) => {
  return <ul className={`${className}`}>{children}</ul>;
};

export default List;
